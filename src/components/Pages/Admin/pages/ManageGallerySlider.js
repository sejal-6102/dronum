// frontend/src/components/Pages/Admin/ManageGallerySlider.jsx
import React from 'react';
import GenericContentForm from './components/GenericContentForm'; // Adjusted path
import { contentSchemas } from './contentSchemas'; // Adjusted path

const ManageGallerySlider = () => {
  const schema = contentSchemas.gallery_slider_images;

  if (!schema) {
    return <p>Error: Schema for gallery_slider_images not found.</p>;
  }

  return (
    <div>
      {/* This component will be rendered inside your AdminPannel.jsx or similar layout */}
      <GenericContentForm
        contentKey={schema.contentKey}
        schema={schema}
        onSaveSuccess={() => {
          console.log('Gallery Slider content saved!');
        }}
      />
    </div>
  );
};

export default ManageGallerySlider;