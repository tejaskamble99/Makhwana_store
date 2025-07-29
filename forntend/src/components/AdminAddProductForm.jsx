import React, { useState } from "react";
import axios from "axios";

const AdminAddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    images: [], // Array of Cloudinary URLs
  });

  const [newImageUrl, setNewImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddImageUrl = () => {
    if (newImageUrl.trim()) {
      setProduct({ ...product, images: [...product.images, newImageUrl.trim()] });
      setNewImageUrl("");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_unsigned_upload_preset"); // ✅ Replace this
    setUploading(true);

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", formData); // ✅ Replace this
      const url = res.data.secure_url;
      setProduct((prev) => ({ ...prev, images: [...prev.images, url] }));
    } catch (err) {
      console.error("Upload Error:", err);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post("http://localhost:5000/api/products", product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        images: [],
      });
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to add product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4">
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="border p-2 w-full" required />
      <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} className="border p-2 w-full" required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="border p-2 w-full" required />
      <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} className="border p-2 w-full" required />
      <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={handleChange} className="border p-2 w-full" required />

      <div className="space-y-2">
        <label className="block font-semibold">Add Image URL</label>
        <div className="flex gap-2">
          <input type="text" placeholder="https://..." value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} className="border p-2 flex-1" />
          <button type="button" onClick={handleAddImageUrl} className="bg-gray-700 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-semibold">Or Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 w-full" />
        {uploading && <p className="text-sm text-blue-500">Uploading...</p>}
      </div>

      {/* Preview Carousel */}
      {product.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto py-2">
          {product.images.map((img, idx) => (
            <img key={idx} src={img} alt={`Preview ${idx}`} className="w-20 h-20 object-cover border rounded" />
          ))}
        </div>
      )}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Product
      </button>
    </form>
  );
};

export default AdminAddProductForm;
