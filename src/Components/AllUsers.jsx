// export default AllUsers;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from 'file-saver';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    axios.get("http://localhost:8080/admin/viewUsers")
      .then((res) => setUsers(res.data))
      .catch(() => alert("Error fetching users"));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.uname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const exportToCSV = () => {
    const csvRows = [
      ["UID", "Name", "Email", "Registered On", "Mobile", "City", "Pincode"],
      ...filteredUsers.map(user => [
        user.uid,
        user.uname,
        user.email,
        new Date(user.created_date).toLocaleDateString(),
        user.mobile,
        user.city,
        user.pincode
      ])
    ];
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    saveAs(blob, "all_users.csv");
  };
  const handleDeleteUser = async (uid) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await axios.delete(`http://localhost:8080/admin/deleteUser/${uid}`);
        alert(response.data); // e.g. "User deleted" or "User not found"
        setUsers(users.filter(user => user.uid !== uid)); // Update UI
      } catch (err) {
        alert("Error deleting user");
      }
    }
  };
  

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Registered Users</h2>

      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to page 1 on search
          }}
          className="form-control mb-2"
          style={{ maxWidth: "300px" }}
        />
        <button onClick={exportToCSV} className="btn btn-outline-success mb-2">
          Export CSV
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>UID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Registered On</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {filteredUsers.length === 0 ? (
    <tr>
      <td colSpan="8" className="text-center">No users found</td>
    </tr>
  ) : (
    filteredUsers.map(user => (
      <tr key={user.uid}>
        <td>{user.uid}</td>
        <td>{user.uname}</td>
        <td>{user.email}</td>
        <td>{new Date(user.created_date).toLocaleDateString()}</td>
        <td>{user.mobile}</td>
        <td>{user.city}</td>
        <td>{user.pincode}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDeleteUser(user.uid)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-outline-primary me-2" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          <span className="align-self-center mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button className="btn btn-outline-primary ms-2" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllUsers;

