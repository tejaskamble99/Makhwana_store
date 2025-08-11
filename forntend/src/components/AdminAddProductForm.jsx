import React, { useState, useRef } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]); // local preview URLs
  const [imageUrls, setImageUrls] = useState([]); // uploaded URLs
  const [uploadProgress, setUploadProgress] = useState({}); // track progress per file
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    previewAndUpload(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );
    previewAndUpload(files);
  };

  const previewAndUpload = (files) => {
    setImages((prev) => [...prev, ...files.map((f) => URL.createObjectURL(f))]);
    uploadImages(files);
  };

  const uploadImages = async (files) => {
    setLoading(true);
    const urls = [...imageUrls];

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ecommerce_upload");
      formData.append("cloud_name", "dnbaykzsg");

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/dnbaykzsg/image/upload"
      );

      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setUploadProgress((prev) => ({
            ...prev,
            [file.name]: percent,
          }));
        }
      });

      xhr.onload = () => {
        const res = JSON.parse(xhr.responseText);
        urls.push(res.secure_url);
        setImageUrls(urls);
        if (urls.length === imageUrls.length + files.length) {
          setLoading(false);
        }
      };

      xhr.send(formData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !description || imageUrls.length === 0) {
      alert("Please fill all fields and upload at least one image.");
      return;
    }

    const newProduct = { name, price, description, images: imageUrls };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        alert("Product added successfully!");
        setName("");
        setPrice("");
        setDescription("");
        setImages([]);
        setImageUrls([]);
        setUploadProgress({});
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add Product</h2>

      <label>Product Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label>Upload Images:</label>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={() => fileInputRef.current.click()}
      >
        Drag & Drop images here or click to browse
      </div>
      <input
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      {loading &&
        Object.entries(uploadProgress).map(([fileName, progress]) => (
          <div key={fileName}>
            <p>{fileName}</p>
            <progress value={progress} max="100">{progress}%</progress>
          </div>
        ))}

      {images.length > 0 && (
        <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="preview"
              style={{ width: "100px", borderRadius: "8px" }}
            />
          ))}
        </div>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Add Product"}
      </button>
    </form>
  );
}
