// frontend/src/components/Pages/Admin/components/GenericContentForm.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// Ensure this path is correct based on your file structure
import { getAdminToken, API_BASE_URL } from '../contentSchemas';

// --- Helper Input Components ---
// TextInput, ImageUploadInput, ArrayInput components remain unchanged from your provided code.
// I'm including them here for completeness of this file.

const TextInput = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div style={{ marginBottom: '15px' }}>
    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>{label}:</label>
    {type === "textarea" ? (
      <textarea
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        rows="4"
        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    ) : (
      <input
        type="text"
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
    )}
  </div>
);

const ImageUploadInput = ({ label, value, onChange, onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const previewUrl = value && !value.startsWith('http') && !value.startsWith('blob:') // Added blob check
    ? `${API_BASE_URL}${value}` // Construct full URL by prepending the backend root
    : value;

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true); setError('');
      try {
        const imageUrl = await onUpload(file);
        onChange(imageUrl);
      } catch (err) {
        setError(err.message || "Upload failed");
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
      {value && (
        <div>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px', maxHeight: '150px', marginTop: '5px', border: '1px solid #eee' }} />
          <p style={{ fontSize: '0.8em', wordBreak: 'break-all' }}>Current: {value}</p>
        </div>
      )}
    </div>
  );
};

const ArrayInput = ({ schema, dataArray = [], onArrayChange, onUpload }) => {
  const { itemSchema, label: arrayLabel } = schema;

  const handleAddItem = () => {
    const newItem = {};
    Object.keys(itemSchema).forEach(key => { newItem[key] = itemSchema[key].type === 'image_url' ? '' : ''; });
    onArrayChange([...dataArray, newItem]);
  };
  const handleRemoveItem = (index) => onArrayChange(dataArray.filter((_, i) => i !== index));
  const handleItemChange = (index, fieldKey, fieldValue) => {
    const newArray = dataArray.map((item, i) => i === index ? { ...item, [fieldKey]: fieldValue } : item);
    onArrayChange(newArray);
  };

  return (
    <div style={{ border: '1px dashed #ddd', padding: '15px', marginBottom: '20px' }}>
      <h4 style={{ marginTop: 0 }}>{arrayLabel || 'Items'}</h4>
      {dataArray.map((item, index) => (
        <div key={index} style={{ border: '1px solid #eee', padding: '15px', marginBottom: '10px', position: 'relative' }}>
          <button type="button" onClick={() => handleRemoveItem(index)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'red', color: 'white', border: 'none', cursor: 'pointer', padding: '2px 5px',width:'120px' }}>× Remove</button>
          <h5 style={{marginTop: 0}}>Item {index + 1}</h5>
          {Object.keys(itemSchema).map(fieldKey => {
            const field = itemSchema[fieldKey];
            if (field.type === 'text' || field.type === 'textarea') {
              return <TextInput key={fieldKey} label={field.label} value={item[fieldKey]} onChange={val => handleItemChange(index, fieldKey, val)} type={field.type} />;
            }
            if (field.type === 'image_url') {
              return <ImageUploadInput key={fieldKey} label={field.label} value={item[fieldKey]} onChange={val => handleItemChange(index, fieldKey, val)} onUpload={onUpload} />;
            }
            return <p key={fieldKey}>Unsupported field type: {field.type}</p>;
          })}
        </div>
      ))}
      <button type="button" onClick={handleAddItem} style={{ padding: '8px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>+ Add Item to "{arrayLabel || 'List'}"</button>
    </div>
  );
};


// --- Main GenericContentForm Component ---
const GenericContentForm = ({ contentKey, schema, onSaveSuccess }) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const adminToken = getAdminToken();

  const fetchData = useCallback(async () => {
    if (!adminToken) { setError("Admin token not found."); setLoading(false); return; }
    setLoading(true); setError('');
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/admin/cms/content/${contentKey}`, // API URL as per your server.js
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      // VVVV  HANDLE 'array' AND 'json_array' for initializing formData  VVVV
      if (schema.type === 'array' || schema.type === 'json_array') {
        setFormData(response.data.contentValue || []);
      } else if (['text', 'textarea', 'image_url'].includes(schema.type)) {
        setFormData(response.data.contentValue || '');
      } else {
        console.warn(`GenericContentForm: Unhandled schema type "${schema.type}" for contentKey "${contentKey}" during fetch. Defaulting to object.`);
        setFormData(response.data.contentValue || {});
      }
      // ^^^^  HANDLE 'array' AND 'json_array' for initializing formData  ^^^^

    } catch (err) {
      console.error(`Error fetching ${contentKey}:`, err);
      setError(err.response?.data?.message || `Failed to load ${schema.label}.`);
      // VVVV  ALSO UPDATE DEFAULTING LOGIC HERE FOR 'json_array'  VVVV
      if (schema.type === 'array' || schema.type === 'json_array') setFormData([]);
      else if (['text', 'textarea', 'image_url'].includes(schema.type)) setFormData('');
      else setFormData({});
      // ^^^^  ALSO UPDATE DEFAULTING LOGIC HERE FOR 'json_array'  ^^^^
    } finally { setLoading(false); }
  }, [contentKey, adminToken, schema.type, schema.label]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleFormChange = (value) => setFormData(value);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!adminToken) { alert("Admin token not found."); return; }
    setSaving(true); setError('');
    try {
      await axios.put(
        `${API_BASE_URL}/api/admin/cms/content/${contentKey}`, // API URL as per your server.js
        { contentValue: formData, contentType: schema.type }, // schema.type will be 'json_array' if set in contentSchemas.js
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      alert(`${schema.label} saved successfully!`);
      if (onSaveSuccess) onSaveSuccess();
      fetchData();
    } catch (err) {
      console.error(`Error saving ${contentKey}:`, err);
      console.error("Error response data from backend:", err.response?.data); // Keep this for debugging
      setError(err.response?.data?.message || `Failed to save ${schema.label}.`);
    } finally { setSaving(false); }
  };

  const imageUploadHandler = async (file) => {
    const fd = new FormData();
    fd.append('image', file);
    const response = await axios.post(
      `${API_BASE_URL}/api/admin/cms/upload-image`, // API URL as per your server.js
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

  if (loading) return <p>Loading {schema.label} editor...</p>;
  if (!adminToken && error) return <p style={{ color: 'red' }}>{error}</p>;
  if (formData === null && !error) return <p>Initializing form for {schema.label}...</p>;

  return (
    <form onSubmit={handleSave} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
      <h3 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', marginBottom: '20px' }}>Edit: {schema.label}</h3>
      {error && <p style={{ color: 'red', border: '1px solid red', padding: '10px', marginBottom: '15px' }}>Error: {error}</p>}

      {/* VVVV  RENDER ArrayInput IF schema.type is 'array' OR 'json_array'  VVVV */}
      {(schema.type === 'array' || schema.type === 'json_array') && (
        <ArrayInput
          schema={schema}
          dataArray={Array.isArray(formData) ? formData : []}
          onArrayChange={handleFormChange}
          onUpload={imageUploadHandler}
        />
      )}
      {/* ^^^^  RENDER ArrayInput IF schema.type is 'array' OR 'json_array'  ^^^^ */}

      {schema.type === 'text' && <TextInput label="Content" value={typeof formData === 'string' ? formData : ''} onChange={handleFormChange} />}
      {schema.type === 'textarea' && <TextInput label="Content" value={typeof formData === 'string' ? formData : ''} onChange={handleFormChange} type="textarea"/>}
      {schema.type === 'image_url' && <ImageUploadInput label="Image" value={typeof formData === 'string' ? formData : ''} onChange={handleFormChange} onUpload={imageUploadHandler} />}
      
      {!['array', 'json_array', 'text', 'textarea', 'image_url'].includes(schema.type) && (
        <p style={{color: 'orange', border: '1px solid orange', padding: '10px'}}>
          <strong>Developer Notice:</strong> Schema type "<code>{schema.type}</code>" for "<em>{schema.label}</em>"
          does not have a specific form renderer in <code>GenericContentForm.jsx</code>.
          Please update the component to handle this type or correct the schema type in <code>contentSchemas.js</code>.
        </p>
      )}

      <button type="submit" disabled={saving || loading} style={{ padding: '10px 20px', fontSize: '16px', background: saving ? '#ccc' : '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{saving ? 'Saving...' : 'Save Changes'}</button>
    </form>
  );
};
export default GenericContentForm;