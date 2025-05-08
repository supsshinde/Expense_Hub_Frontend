import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UserProfile.css';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-avatar">
          <FaUserAlt size={60} />
        </div>
        <h3 className="profile-title">Welcome {user.uname}</h3>

        <div className="profile-details">
          <p><strong>Name:</strong> {user.uname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Pincode:</strong> {user.pincode}</p>
        </div>

        <button
          className="edit-button"
          onClick={() => navigate('/user/dashboard/edit-profile')}
        >
          ✏️ Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
