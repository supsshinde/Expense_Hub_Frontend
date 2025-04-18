// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/AddCategory.css"; // Link external CSS

// const AddCategory = () => {
//   const [categoryName, setCategoryName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const category = {
//       cname: categoryName
//     };

//     try {
//       const res = await axios.post("http://localhost:8080/admin/addCategory", category);
//       setMessage(res.data);
//       setCategoryName("");
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data);
//       } else {
//         setMessage("Server error. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="add-category-container">
//       <div className="add-category-card">
//         <h2>📂 Add Category</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter Category Name"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//             required
//             className="form-input"
//           />
//           <button type="submit" className="submit-btn">Add Category</button>
//         </form>

//         {message && (
//           <div className="form-message">{message}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddCategory;
import React, { useState } from "react";
import axios from "axios";
import "../styles/AddCategory.css"; // External CSS
import { FaFolderPlus } from "react-icons/fa";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

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
      <div className="add-category-card">
        <h2><FaFolderPlus style={{ marginRight: "8px", color: "#007bff" }} /> Add Category</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <i className="fas fa-tag"></i>
            <input
              type="text"
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-btn">Add Category</button>
        </form>

        {message && (
          <div className="form-message">{message}</div>
        )}
      </div>
    </div>
  );
};

export default AddCategory;

