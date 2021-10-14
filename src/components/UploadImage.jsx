import React from "react";

export default function UploadImage({ setImage }) {
  return (
    <div className="upload">
      <div className="add">
        <label>
          <p>Upload Image</p>
          <input
            type="file"
            className="btn-circle"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      </div>
    </div>
  );
}
