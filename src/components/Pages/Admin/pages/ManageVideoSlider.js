// frontend/src/components/Pages/Admin/ManageVideoSlider.jsx
import React from 'react';
import GenericContentForm from './components/GenericContentForm'; // Adjusted path
import { contentSchemas } from './contentSchemas'; // Adjusted path

const ManageVideoSlider = () => {
  const schema = contentSchemas.video_slider_slides;

  if (!schema) {
    return <p>Error: Schema for video_slider_slides not found.</p>;
  }

  return (
    <div>
      <GenericContentForm
        contentKey={schema.contentKey}
        schema={schema}
        onSaveSuccess={() => {
          console.log('Video Slider content saved!');
        }}
      />
    </div>
  );
};

export default ManageVideoSlider;