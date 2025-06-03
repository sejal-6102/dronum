// frontend/src/components/Pages/Admin/components/GenericContentForm.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// Ensure this path is correct based on your file structure
import { getAdminToken, API_BASE_URL } from '../contentSchemas';

// --- Helper Input Components ---


const getDefaultValueForType = (type, fieldSch = {}) => {
  if (fieldSch.defaultValue !== undefined) return fieldSch.defaultValue;
  if (type === 'image_url' || type === 'text' || type === 'textarea' || type === 'url' || type === 'select') return ''; // Added 'select'
  if (type === 'number') return ''; // Or 0, depending on preference for empty vs. zero
  if (type === 'boolean') return false;
  if (type === 'array' || type === 'json_array') return [];
  console.warn(`getDefaultValueForType: Unhandled type "${type}" for default value. Defaulting to null.`);
  return null;
};
// ^^^^^ END OF MOVED getDefaultValueForType ^^^^^

const TextInput = ({ label, value, onChange, placeholder, type = "text" }) => {
  const inputType = (type === "textarea") ? "textarea" :
                    (type === "number") ? "number" :
                    (type === "url") ? "url" :
                    "text";

  const handleChange = (e) => {
    let val = e.target.value;
    // For number type, keep as string for controlled input; validation/conversion on save
    onChange(val);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}:</label>
      {inputType === "textarea" ? (
        <textarea
          value={value === null || value === undefined ? '' : String(value)}
          onChange={handleChange}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
          rows="4"
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      ) : (
        <input
          type={inputType}
          value={value === null || value === undefined ? '' : String(value)}
          onChange={handleChange}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`
                       + (inputType === 'url' ? ' (e.g., https://example.com)' : '')
                       + (inputType === 'number' ? ' (e.g., 123 or 12.34)' : '')
                      }
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
      )}
    </div>
  );
};

const ImageUploadInput = ({ label, value, onChange, onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  let backendRootUrl = API_BASE_URL;
  if (API_BASE_URL && API_BASE_URL.includes('/api')) {
      backendRootUrl = API_BASE_URL.substring(0, API_BASE_URL.lastIndexOf('/api'));
  } else if (API_BASE_URL && API_BASE_URL.endsWith('/')) {
      backendRootUrl = API_BASE_URL.slice(0, -1);
  }

  const previewUrl = value && typeof value === 'string' && (value.startsWith('http') || value.startsWith('blob:'))
    ? value
    : value && typeof value === 'string' && backendRootUrl
    ? `${backendRootUrl}${value.startsWith('/') ? value : `/${value}`}`
    : null;

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true); setError('');
      try {
        const imageUrl = await onUpload(file);
        onChange(imageUrl);
      } catch (err) {
        console.error("Image upload error:", err);
        setError(err.message || "Upload failed. Check console for details.");
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} disabled={uploading} style={{ marginBottom: '5px' }} />
      {uploading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {previewUrl && (
        <div>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px', maxHeight: '150px', marginTop: '5px', border: '1px solid #eee' }} />
          <p style={{ fontSize: '0.8em', wordBreak: 'break-all' }}>Current path: {value}</p>
        </div>
      )}
       {!previewUrl && value && typeof value === 'string' && (
         <p style={{ fontSize: '0.8em', wordBreak: 'break-all' }}>Current path: {value} (Preview unavailable)</p>
       )}
    </div>
  );
};

const BooleanInput = ({ label, value, onChange }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
          style={{ marginRight: '8px', transform: 'scale(1.2)' }}
        />
        {label}
      </label>
    </div>
  );
};


// NEW: SelectInput Component
const SelectInput = ({ label, value, onChange, options, placeholder }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}:</label>
      <select
        value={value || ''} // Handle undefined or null for controlled component
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', height: 'auto', backgroundColor: 'blue' }}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options && options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};


// Forward declaration for recursive use
let ArrayInputComponent;

const renderFormFieldBasedOnSchema = (fieldKey, fieldConfig, value, onChange, onUpload, fieldKeyPrefix) => {
  // THIS IS THE CRITICAL FIX: Added 'json_array' to the condition
  if (fieldConfig.type === 'array' || fieldConfig.type === 'json_array') {
    return (
      <ArrayInputComponent
        key={`${fieldKeyPrefix}-${fieldKey}`} // Use fieldKey from params
        schema={fieldConfig}
        dataArray={Array.isArray(value) ? value : (fieldConfig.defaultValue || [])}
        onArrayChange={newSubArrayData => onChange(fieldKey, newSubArrayData)} // Pass fieldKey to onChange
        onUpload={onUpload}
        fieldKeyPrefix={`${fieldKeyPrefix}-${fieldKey}`}
      />
    );
  }


  if (fieldConfig.type === 'select') {
    return (
      <SelectInput
        key={`${fieldKeyPrefix}-${fieldKey}`}
        label={fieldConfig.label}
        value={value}
        onChange={val => onChange(fieldKey, val)}
        options={fieldConfig.options} // Pass options from schema
        placeholder={fieldConfig.placeholder} // Pass placeholder
      />
    );
  }
  // ^^^^ END OF NEW 'select' TYPE HANDLING ^^^^
  if (fieldConfig.type === 'boolean') {
    return (
      <BooleanInput
        key={`${fieldKeyPrefix}-${fieldKey}`}
        label={fieldConfig.label}
        value={value}
        onChange={val => onChange(fieldKey, val)} // Pass fieldKey
      />
    );
  }
  if (['text', 'textarea', 'number', 'url'].includes(fieldConfig.type)) {
    return (
      <TextInput
        key={`${fieldKeyPrefix}-${fieldKey}`}
        label={fieldConfig.label}
        value={value}
        onChange={val => onChange(fieldKey, val)} // Pass fieldKey
        type={fieldConfig.type}
        placeholder={fieldConfig.placeholder || fieldConfig.label}
      />
    );
  }
  if (fieldConfig.type === 'image_url') {
    return (
      <ImageUploadInput
        key={`${fieldKeyPrefix}-${fieldKey}`}
        label={fieldConfig.label}
        value={value}
        onChange={val => onChange(fieldKey, val)} // Pass fieldKey
        onUpload={onUpload}
      />
    );
  }
  return <p key={`${fieldKeyPrefix}-${fieldKey}`} style={{color: 'red'}}>Unsupported field type: "{fieldConfig.type}" for "{fieldConfig.label}"</p>;
};


ArrayInputComponent = ({ schema, dataArray = [], onArrayChange, onUpload, fieldKeyPrefix = "" }) => {
  const { itemSchema, label: arrayLabel, _itemName, _itemTitleField } = schema;

  const getDefaultValueForType = (type, fieldSch = {}) => {
    if (fieldSch.defaultValue !== undefined) return fieldSch.defaultValue;
    if (type === 'image_url' || type === 'text' || type === 'textarea' || type === 'url') return '';
    if (type === 'number') return '';
    if (type === 'boolean') return false;
    if (type === 'array' || type === 'json_array') return []; // Also handle json_array for defaults in nested items
    return null;
  };

  const handleAddItem = () => {
    const newItem = {};
    Object.keys(itemSchema).forEach(key => {
      if (key.startsWith('_')) return;
      const fieldConfig = itemSchema[key];
      newItem[key] = getDefaultValueForType(fieldConfig.type, fieldConfig);
    });
    onArrayChange(Array.isArray(dataArray) ? [...dataArray, newItem] : [newItem]);
  };

  const handleRemoveItem = (index) => {
    if (Array.isArray(dataArray)) {
      onArrayChange(dataArray.filter((_, i) => i !== index));
    }
  };

  const handleItemChange = (index, changedFieldKey, fieldValue) => {
    if (Array.isArray(dataArray)) {
      const newArray = [...dataArray];
      const newItem = { ...newArray[index], [changedFieldKey]: fieldValue };
      newArray[index] = newItem;
      onArrayChange(newArray);
    }
  };

  const currentDataArray = Array.isArray(dataArray) ? dataArray : [];

  return (
    <div style={{ border: '1px dashed #ddd', padding: '15px', marginBottom: '20px', marginLeft: fieldKeyPrefix.split('-').length > 2 ? '20px' : '0', backgroundColor: '#fdfdfd' }}>
      <h4 style={{ marginTop: 0, color: '#333', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>{arrayLabel || 'Items'}</h4>
      {currentDataArray.length === 0 && <p style={{ fontStyle: 'italic', color: '#777' }}>No items yet. Click "Add New {(_itemName || 'Item').toLowerCase()}" to begin.</p>}
      {currentDataArray.map((item, index) => (
        <div key={`${fieldKeyPrefix}-item-${index}`} style={{ border: '1px solid #e0e0e0', padding: '15px', marginBottom: '15px', position: 'relative', background: '#fff', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <button
            type="button"
            onClick={() => handleRemoveItem(index)}
            style={{ position: 'absolute', top: '10px', right: '10px', background: '#dc3545', color: 'white', border: 'none', cursor: 'pointer', padding: '4px 10px', borderRadius: '4px', fontSize: '0.85em', zIndex: 1, fontWeight: 'bold',width:'170px' }}
          >
            × Remove {(_itemTitleField && item && item[_itemTitleField]) ? `"${item[_itemTitleField]}"` : `Item ${index + 1}`}
          </button>
          <h5 style={{ marginTop: 0, marginRight: '150px', color: '#0056b3', borderBottom: '1px solid #e9ecef', paddingBottom: '8px', marginBottom: '15px' }}>
            {(_itemTitleField && item && typeof item === 'object' && item[_itemTitleField]) ? String(item[_itemTitleField]) : `${_itemName || 'Item'} ${index + 1}`}
          </h5>
          {Object.keys(itemSchema).map(subFieldKey => {
            if (subFieldKey.startsWith('_')) return null;
            const fieldConfig = itemSchema[subFieldKey];
            const value = item && typeof item === 'object' ? item[subFieldKey] : getDefaultValueForType(fieldConfig.type, fieldConfig);

            return renderFormFieldBasedOnSchema(
              subFieldKey,
              fieldConfig,
              value,
              // The onChange for fields *within* an array item:
              // It receives (fieldKeyInItem, newValue) from renderFormFieldBasedOnSchema's children
              (changedKeyInItem, newValueFromChild) => handleItemChange(index, changedKeyInItem, newValueFromChild),
              onUpload,
              `${fieldKeyPrefix}-item-${index}` // New prefix for deeper nesting
            );
          })}
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddItem}
        style={{ padding: '10px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor:'pointer', fontSize: '1em', marginTop: '10px', fontWeight: '500' }}
      >
        + Add New {(_itemName || 'Item')}
      </button>
    </div>
  );
};

const GenericContentForm = ({ contentKey, schema, onSaveSuccess }) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const adminToken = getAdminToken();

  const getInitialDataForSchema = useCallback((sch) => {
    if (!sch) return null;
    if (sch.defaultValue !== undefined) return sch.defaultValue;
    if (sch.type === 'array' || sch.type === 'json_array') return [];
    if (['text', 'textarea', 'image_url', 'url'].includes(sch.type)) return '';
    if (sch.type === 'number') return '';
    if (sch.type === 'boolean') return false;
    console.warn(`GenericContentForm: Unhandled schema type "${sch.type}" for default value. Defaulting to null.`);
    return null;
  }, []);

  const fetchData = useCallback(async () => {
    if (!adminToken) { setError("Admin authentication token not found. Please log in again."); setLoading(false); return; }
    if (!contentKey || !schema || !schema.type) {
        setError("Configuration error: Content key or schema type is missing.");
        setLoading(false);
        setFormData(getInitialDataForSchema(schema));
        return;
    }
    setLoading(true); setError('');
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/admin/cms/content/${contentKey}`,
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      const receivedValue = response.data.contentValue;

      if (schema.type === 'array' || schema.type === 'json_array') {
        setFormData(Array.isArray(receivedValue) ? receivedValue : getInitialDataForSchema(schema));
      } else {
        setFormData(receivedValue !== undefined && receivedValue !== null ? receivedValue : getInitialDataForSchema(schema));
      }
    } catch (err) {
      console.error(`Error fetching content for ${contentKey} (${schema.label}):`, err);
      const initialValue = getInitialDataForSchema(schema);
      if (err.response && err.response.status === 404) {
        setError(`Content for "${schema.label}" not found. Initializing with default values. Please save to create it.`);
        setFormData(initialValue);
      } else {
        setError(err.response?.data?.message || `Failed to load ${schema.label}. Initializing with defaults. Check console.`);
        setFormData(initialValue);
      }
    } finally { setLoading(false); }
  }, [contentKey, adminToken, schema, getInitialDataForSchema]);

  useEffect(() => {
    if (schema) {
      fetchData();
    } else {
      setLoading(false);
      setError("Schema not provided to GenericContentForm.");
    }
  }, [fetchData, schema]);

  // This is the onChange handler for the TOP-LEVEL form fields rendered by renderFormFieldBasedOnSchema
  // If the top-level schema is an object, fieldKey will be the property name, value its new value.
  // If the top-level schema is a simple type (text, boolean) or an array (json_array),
  // fieldKey here will be the contentKey, and value will be the new state for the entire formData.
  const handleTopLevelChange = (key, newValue) => {
    // If schema is an object type and key is a property of that object
    if (schema.type === 'object' && schema.itemSchema && schema.itemSchema.hasOwnProperty(key)) {
        setFormData(prev => ({ ...prev, [key]: newValue }));
    } else {
        // For simple types (text, boolean) or array types (array, json_array)
        // where the 'key' passed from renderFormFieldBasedOnSchema is actually the contentKey (acting as a pseudo-field key)
        // and 'newValue' is the entire new value for formData.
        setFormData(newValue);
    }
  };


  const sanitizeDataForSave = useCallback((data, fieldSchema) => {
    if (!fieldSchema) return data;

    if (fieldSchema.type === 'number') {
        if (data === '' || data === null || data === undefined) return null;
        const num = parseFloat(String(data));
        return isNaN(num) ? null : num;
    }
    if (fieldSchema.type === 'boolean') {
        return !!data;
    }
    if ((fieldSchema.type === 'array' || fieldSchema.type === 'json_array') && fieldSchema.itemSchema) {
        if (!Array.isArray(data)) return fieldSchema.defaultValue !==undefined ? fieldSchema.defaultValue : [];
        return data.map(item => {
            if (typeof item !== 'object' || item === null) return item;
            const newItem = {};
            Object.keys(fieldSchema.itemSchema).forEach(key => {
                if(key.startsWith('_')) return;
                newItem[key] = sanitizeDataForSave(item[key], fieldSchema.itemSchema[key]);
            });
            return newItem;
        });
    }
    return data;
  }, []);


  const handleSave = async (e) => {
    e.preventDefault();
    if (!adminToken) { alert("Admin token not found. Please log in again."); return; }
    if (formData === null) { alert("Form data is not loaded or initialized correctly. Please check for errors."); return; }

    setSaving(true); setError('');
    const payloadValue = sanitizeDataForSave(formData, schema);

    try {
      await axios.put(
        `${API_BASE_URL}/api/admin/cms/content/${contentKey}`,
        { contentValue: payloadValue, contentType: schema.type },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      alert(`${schema.label} saved successfully!`);
      if (onSaveSuccess) onSaveSuccess();
    } catch (err) {
      console.error(`Error saving ${contentKey}:`, err);
      console.error("Error response data from backend:", err.response?.data);
      setError(err.response?.data?.message || `Failed to save ${schema.label}. Check console for details.`);
    } finally { setSaving(false); }
  };

  const imageUploadHandler = async (file) => {
    if (!adminToken) throw new Error("Admin token not available for upload.");
    const fd = new FormData();
    fd.append('image', file);
    const response = await axios.post(
      `${API_BASE_URL}/api/admin/cms/upload-image`,
      fd,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${adminToken}`
        }
      }
    );
    return response.data.imageUrl;
  };

  if (!schema) return <p style={{ color: 'red', padding: '10px', border: '1px solid red' }}>Configuration Error: Schema is not available.</p>;
  if (loading) return <p>Loading {schema.label || 'content'} editor...</p>;
  if (error && formData === null) {
    return <p style={{ color: 'red', border: '1px solid red', padding: '10px' }}>Critical Error: {error}</p>;
  }
  if (formData === null && !error) return <p>Initializing form for {schema.label || 'content'}... (If this persists, check schema and console)</p>;

  return (
    <form onSubmit={handleSave} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9', marginBottom:'30px' }}>
      <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', marginBottom: '20px' }}>Edit: {schema.label}</h3>
      {error && !saving && <p style={{ color: 'red', border: '1px solid red', padding: '10px', marginBottom: '15px' }}>Operation Error: {error}</p>}

      {/* VVVVVV  THIS IS THE CORRECTED RENDERING LOGIC VVVVVV */}
      {schema.type === "object" && schema.itemSchema ? (
        // If the top-level schema IS an object (like our full blog post schema)
        Object.keys(schema.itemSchema).map(objectFieldKey => {
            // objectFieldKey will be "title", "date", "img", "sections", etc.
            const fieldConfigForObject = schema.itemSchema[objectFieldKey];
            const valueForObjectField = (formData && typeof formData === 'object') 
                                          ? formData[objectFieldKey] 
                                          : getDefaultValueForType(fieldConfigForObject.type, fieldConfigForObject); // Get default if formData or field is undefined

            return renderFormFieldBasedOnSchema(
                objectFieldKey,                 // The key for this field (e.g., "title")
                fieldConfigForObject,           // The schema for this specific field (e.g., {type: "text", label: "Blog Post Title", ...})
                valueForObjectField,            // The current value from formData for this field
                handleTopLevelChange,           // This will correctly update formData[objectFieldKey] because schema.type is 'object'
                imageUploadHandler,
                `${contentKey}-${objectFieldKey}` // Unique key prefix for React
            );
        })
      ) : (
        // If the top-level schema IS NOT an object 
        // (e.g., it's a json_array like blog_grid_items, or a simple textarea)
        renderFormFieldBasedOnSchema(
            contentKey,             // The main contentKey acts as the fieldKey
            schema,                 // The whole schema itself
            formData,               // The whole formData (e.g., the array of summaries, or the textarea string)
            handleTopLevelChange,   // This will correctly set the entire formData because schema.type is not 'object'
            imageUploadHandler,
            contentKey
        )
      )}
      {/* ^^^^^^ END OF CORRECTED RENDERING LOGIC ^^^^^^ */}

      <button type="submit" disabled={saving || loading} style={{ padding: '10px 20px', fontSize: '16px', background: saving ? '#aaa' : '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: (saving || loading) ? 'not-allowed' : 'pointer', marginTop: '20px' }}>
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
};

export default GenericContentForm;