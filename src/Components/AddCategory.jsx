import React, { useState } from "react";
import axios from "axios";
import "../styles/AddCategory.css";
import { FaFolderPlus, FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = { cname: categoryName };

    try {
      const res = await axios.post("http://localhost:8080/admin/addCategory", category);
      setMessage(res.data);
      setCategoryName("");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage("Server error. Please try again.");
      }
    }
  };

  return (
    <div className="add-category-container">
      <form className="add-category-form" onSubmit={handleSubmit}>
        <div className="avatar">
          <FaFolderPlus style={{ color: "white", fontSize: "30px" }} />
        </div>
        <h2>Add Category</h2>

        <div className="input-group">
          <i className="fa fa-tag icon"></i>
          <input
            type="text"
            placeholder="Enter Category Name"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Category</button>

        {/* View Categories button inside the form */}
        
        {message && (
          <div className="form-message mt-5" style={{ color: "green", width: "90%", justifyContent: "center", marginRight: "40px", marginLeft: "40px" }}>{message}</div>
        )}

        <button
          type="button"
          className="view-category-btn"
          onClick={() => navigate("/admin-dashboard/view-category")}
        >
          <FaListUl style={{ marginRight: "8px" }} />
          View Categories
        </button>

      </form>
    </div>
  );
};

export default AddCategory;
