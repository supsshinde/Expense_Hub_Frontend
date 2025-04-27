// export default ViewProfile;
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    if (!uid) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8080/user/viewProfile/${uid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found or not authorized');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="alert alert-danger mt-4 text-center">{error}</div>;

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#e6f2ff",
        padding: "10px"
      }}
    >
      <div className="card shadow-lg border-0 w-100" style={{ maxWidth: "500px", backgroundColor: "#f0f8ff" }}>
        <div className="card-header bg-primary text-white text-center">
          <h3 className="mb-0">User Profile</h3>
        </div>
        <div className="card-body text-center">

          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #007bff" }}
          />

          <p><strong className="text-secondary">Name:</strong> {user.uname}</p>
          <p><strong className="text-secondary">Email:</strong> {user.email}</p>
          <p><strong className="text-secondary">Mobile:</strong> {user.mobile}</p>
          <p><strong className="text-secondary">City:</strong> {user.city}</p>
          <p><strong className="text-secondary">Pincode:</strong> {user.pincode}</p>

          {/* Edit Profile Button */}
          <button className="btn btn-outline-primary mt-3" onClick={() => alert("Edit Profile clicked!")}>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
