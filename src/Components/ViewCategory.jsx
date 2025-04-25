// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ViewCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [editingCategoryId, setEditingCategoryId] = useState(null);
//   const [editedCategoryName, setEditedCategoryName] = useState("");

//   const fetchCategories = () => {
//     axios.get("http://localhost:8080/admin/viewCategory")
//       .then(res => setCategories(res.data))
//       .catch(err => console.error("Error fetching categories", err));
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleDelete = (cid) => {
//     axios.delete(`http://localhost:8080/admin/deleteCategory/${cid}`)
//       .then(res => {
//         alert(res.data);
//         fetchCategories();
//       })
//       .catch(err => alert("Error deleting category"));
//   };

//   const startEditing = (cid, cname) => {
//     setEditingCategoryId(cid);
//     setEditedCategoryName(cname);
//   };

//   const handleUpdate = () => {
//     axios.put("http://localhost:8080/admin/updateCategory", {
//       cid: editingCategoryId,
//       cname: editedCategoryName
//     })
//     .then(res => {
//       alert(res.data);
//       setEditingCategoryId(null);
//       fetchCategories();
//     })
//     .catch(err => alert("Error updating category"));
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Category List</h2>
//       <table className="table table-striped table-bordered mt-3">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Category Name</th>
//             <th colSpan="2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map(cat => (
//             <tr key={cat.cid}>
//               <td>{cat.cid}</td>
//               <td>
//                 {editingCategoryId === cat.cid ? (
//                   <input
//                     type="text"
//                     value={editedCategoryName}
//                     onChange={(e) => setEditedCategoryName(e.target.value)}
//                   />
//                 ) : (
//                   cat.cname
//                 )}
//               </td>
//               <td>
//                 {editingCategoryId === cat.cid ? (
//                   <button className="btn btn-success" onClick={handleUpdate}>Save</button>
//                 ) : (
//                   <button className="btn btn-primary" onClick={() => startEditing(cat.cid, cat.cname)}>Edit</button>
//                 )}
//               </td>
//               <td>
//                 <button className="btn btn-danger" onClick={() => handleDelete(cat.cid)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewCategory;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import "../styles/ViewCategory.css";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");

  const fetchCategories = () => {
    axios.get("http://localhost:8080/admin/viewCategory")
      .then(res => setCategories(res.data))
      .catch(err => toast.error("Error fetching categories"));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = (cid) => {
    axios.delete(`http://localhost:8080/admin/deleteCategory/${cid}`)
      .then(res => {
        toast.success(res.data);
        fetchCategories();
      })
      .catch(() => toast.error("Error deleting category"));
  };

  const startEditing = (cid, cname) => {
    setEditingCategoryId(cid);
    setEditedCategoryName(cname);
  };

  const handleUpdate = () => {
    axios.put("http://localhost:8080/admin/updateCategory", {
      cid: editingCategoryId,
      cname: editedCategoryName
    })
      .then(res => {
        toast.success(res.data);
        setEditingCategoryId(null);
        fetchCategories();
      })
      .catch(() => toast.error("Error updating category"));
  };

  return (
    <motion.div 
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer position="top-center" autoClose={2000} />

      <h2 className="text-center mb-4">📂 Category List</h2>

      <div className="table-responsive">
        <table className="table table-hover table-bordered shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <motion.tr 
                key={cat.cid}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <td>{cat.cid}</td>
                <td>
                  {editingCategoryId === cat.cid ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editedCategoryName}
                      onChange={(e) => setEditedCategoryName(e.target.value)}
                    />
                  ) : (
                    cat.cname
                  )}
                </td>
                <td>
                  {editingCategoryId === cat.cid ? (
                    <button className="btn btn-success btn-sm" onClick={handleUpdate}> Save</button>
                  ) : (
                    <button className="btn btn-primary btn-sm" onClick={() => startEditing(cat.cid, cat.cname)}> Edit</button>
                  )}
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat.cid)}> Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ViewCategory;

