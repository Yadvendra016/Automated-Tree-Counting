import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUploadOutlined } from "@ant-design/icons";
import "./Upload.css";

const ImpageUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setUploadedFile(file);
    },
  });

  const uploadBoxClass = `upload-box ${isDragActive ? "drag-active" : ""}`;

  return (
    <div className="container-fluid vh-100" style={{ paddingTop: "70px" }}>
      <div className="row">
        {/* Image upload section */}
        <div className="col-md-6">
          <h2 className="mt-4 mx-3 mb-20">Upload Forest Imagery</h2>
          {/* Rectangular box */}
          <div {...getRootProps()} className={uploadBoxClass}>
            {uploadedFile ? (
              <div>
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded"
                  className="uploaded-image"
                />
                <p className="image-name">File Name: {uploadedFile.name}</p>
              </div>
            ) : (
              <>
                <CloudUploadOutlined className="upload-icon" />
                <p className="upload-text">
                  {isDragActive
                    ? "Drop the image here"
                    : "Upload image or drag and drop image"}
                </p>
              </>
            )}
            {/* Input for dropzone */}
            <input {...getInputProps()} />
          </div>
          {/* Start analysis button */}
          <div className="d-flex mt-10 justify-content-center">
            <button className="btn w-72 p-2 btn-primary start-analysis-button">
              Start Analysis
            </button>
          </div>
        </div>
        {/* Take information about the image */}
        <div className="col-md-6">
          <h2 className="mt-4 mx-3 mb-10">Project Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="projectTitle" className="form-label">
                Project Title
              </label>
              <input
                type="text"
                className="form-control"
                id="projectTitle"
                placeholder="Enter Project Title"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Enter Location"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dateTime" className="form-label">
                Date and Time
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="dateTime"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="projectDescription" className="form-label">
                Project Description
              </label>
              <textarea
                className="form-control"
                id="projectDescription"
                rows="4"
                placeholder="Enter Project Description"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImpageUpload;
