import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    brand: "",
    images: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...form.images];
    updatedImages[index] = value;
    setForm((prev) => ({ ...prev, images: updatedImages }));
  };

  const addImageField = () => {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // your auth token

      const response = await axios.post(
        "http://localhost:8080/api/v1/products",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added successfully!");
      setForm({
        title: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        brand: "",
        images: [""],
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "description", "price", "category", "stock", "brand"].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            className="w-full p-2 border rounded"
            required
          />
        ))}

        <div>
          <label className="font-medium">Images</label>
          {form.images.map((img, index) => (
            <input
              key={index}
              type="text"
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder={`Image URL ${index + 1}`}
              className="w-full p-2 border rounded mt-1"
            />
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-sm text-blue-600 mt-2 hover:underline"
          >
            + Add another image
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;