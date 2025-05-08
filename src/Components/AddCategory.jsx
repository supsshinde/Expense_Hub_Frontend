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

      if (res.data === "Category Added") {
        setMessage("✅ Category successfully added!");
        setCategoryName("");
      } else {
        setMessage("❌ Failed to add category.");
      }
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

        {message && (
          <div
            className="form-message mt-5"
            style={{
              color: message.includes("successfully") ? "green" : "red",
              width: "90%",
              justifyContent: "center",
              margin: "15px auto",
            }}
          >
            {message}
          </div>
        )}

        <button
          type="button"
          className="view-category-btn"
          onClick={() => navigate("/adminDashboard/view-category")}
        >
          <FaListUl style={{ marginRight: "8px" }} />
          View Categories
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
