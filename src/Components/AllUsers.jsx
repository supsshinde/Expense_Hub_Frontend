import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "../styles/AllUsers.css"; 

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/viewUsers")
      .then((res) => setUsers(res.data))
      .catch(() => alert("Error fetching users"));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.uname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      ...filteredUsers.map((user) => [
        user.uid,
        user.uname,
        user.email,
        new Date(user.created_date).toLocaleDateString(),
        user.mobile,
        user.city,
        user.pincode,
      ]),
    ];
    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    saveAs(blob, "all_users.csv");
  };

  const handleDeleteUser = async (uid) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:8080/admin/deleteUser/${uid}`);
        setUsers(users.filter((user) => user.uid !== uid));
      } catch (err) {
        alert("Error deleting user");
      }
    }
  };

  return (
    <div className="all-users-wrapper">
      <div className="header-actions">
        <h2>All Registered Users</h2>
        <div className="header-tools">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm} 
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button onClick={exportToCSV}>Export CSV</button>
        </div>
      </div>

      <div className="card-table-header">
        <span>UID</span>
        <span>Name</span>
        <span>Email</span>
        <span>Registered</span>
        <span>Mobile</span>
        <span>City</span>
        <span>Pincode</span>
        <span>Action</span>
      </div>

      <div className="user-cards-container">
        {currentUsers.length === 0 ? (
          <p className="no-users">No users found</p>
        ) : (
          currentUsers.map((user) => (
            <div className="user-card-row" key={user.uid}>
              <span>{user.uid}</span>
              <span>{user.uname}</span>
              <span>{user.email}</span>
              <span>{new Date(user.created_date).toLocaleDateString()}</span>
              <span>{user.mobile}</span>
              <span>{user.city}</span>
              <span>{user.pincode}</span>
              <span className="action-column">
                <button
                  title="Delete"
                  className="action-btn delete"
                  onClick={() => handleDeleteUser(user.uid)}
                >
                  🗑️
                </button>
              </span>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
          {/* <span>Page {currentPage} </span> */}
          <span className="page-info text-dark">
            Page {currentPage} 
          </span>
          <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
