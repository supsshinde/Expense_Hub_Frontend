import React, { useEffect, useState } from 'react';

const ViewProfile = () => {
  const [user, setUser] = useState(null);      // State to store user data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null);     // State for error handling

  useEffect(() => {
    const uid = localStorage.getItem('uid'); // Get UID from localStorage
    console.log("UID from localStorage:", uid); // 👈 Add this line
    if (!uid) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    // Fetch user profile data using UID in the URL
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
  }, []); // Run once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>View Profile</h2>
      <div className="card p-3">
        <p><strong>Name:</strong> {user.uname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>Pincode:</strong> {user.pincode}</p>
      </div>
    </div>
  );
};

export default ViewProfile;
