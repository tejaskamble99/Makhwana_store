import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminAddProductForm from "../components/AdminAddProductForm";

const AddProductPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user || user.role !== 1) {
      navigate("/admin/add-product"); // Or display a message component
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Add New Product</h1>
      <AdminAddProductForm />
    </div>
  );
};

export default AddProductPage;
