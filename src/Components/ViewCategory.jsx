import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ViewCategory.css";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 5;

  const fetchCategories = () => {
    axios
      .get("http://localhost:8080/admin/viewCategory")
      .then((res) => setCategories(res.data))
      .catch(() => toast.error("Error fetching categories"));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = (cid) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios
        .delete(`http://localhost:8080/admin/deleteCategory/${cid}`)
        .then((res) => {
          toast.success(res.data);
          fetchCategories();
        })
        .catch(() => toast.error("Error deleting category"));
    }
  };

  const startEditing = (cid, cname) => {
    setEditingCategoryId(cid);
    setEditedCategoryName(cname);
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:8080/admin/updateCategory", {
        cid: editingCategoryId,
        cname: editedCategoryName,
      })
      .then((res) => {
        toast.success(res.data);
        setEditingCategoryId(null);
        fetchCategories();
      })
      .catch(() => toast.error("Error updating category"));
  };

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(categories.length / categoriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="category-wrapper">
      <div className="category-container">
        <ToastContainer position="top-center" autoClose={2000} />

        <div className="header-actions">
          <h2>📂 Category List</h2>
          <button
            className="header-tools-button" style={{ width: "250px", marginTop: "70px" }}
            onClick={() => (window.location.href = "/admin-dashboard/add-category")}
          >
            ➕ Add Category
          </button>
        </div>

        <div className="category-table-header">
          <span>ID</span>
          <span>Category Name</span>
          <span>Edit</span>
          <span>Delete</span>
        </div>

        <div className="category-cards-container">
          {currentCategories.length === 0 ? (
            <p className="no-users">No categories found</p>
          ) : (
            currentCategories.map((cat) => (
              <div className="category-card-row" key={cat.cid}>
                <span>{cat.cid}</span>
                <span>
                  {editingCategoryId === cat.cid ? (
                    <input
                      type="text"
                      value={editedCategoryName}
                      onChange={(e) => setEditedCategoryName(e.target.value)}
                      className="edit-input"
                    />
                  ) : (
                    cat.cname
                  )}
                </span>
                <span className="action-column">
                  {editingCategoryId === cat.cid ? (
                    <button className="action-btn" onClick={handleUpdate}>
                      💾
                    </button>
                  ) : (
                    <button className="action-btn" onClick={() => startEditing(cat.cid, cat.cname)}>
                      ✏️
                    </button>
                  )}
                </span>
                <span className="action-column">
                  <button className="action-btn delete" onClick={() => handleDelete(cat.cid)}>
                    🗑️
                  </button>
                </span>
              </div>
            ))
          )}
        </div>

        {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="prev-btn"
          >
            Prev
          </button>
          <span className="page-info text-dark">
            Page {currentPage} 
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="next-btn"
          >
         Next
         </button>
        </div>
)}

      </div>
    </div>
  );
};

export default ViewCategory;
