import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

function DragAndDropPhoto({ setFile }) {
  const fileTypes = ["JPEG", "PNG", "GIF", "JPG", "WEBP"];
  const [preview, setPreview] = useState(null);
  const handleChange = (file) => {
    const url = URL.createObjectURL(file[0]);
    setPreview(url);

    setFile(file);
  };
  return (
    <div className="pb-6">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      {preview && <img src={preview} alt="" className="pb-2" />}
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
    </div>
  );
}

export default DragAndDropPhoto;
