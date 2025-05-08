import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    pincode: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      fetch(`http://localhost:8080/user/viewProfile/${uid}`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            name: data.uname,
            email: data.email,
            mobile: data.mobile,
            city: data.city,
            pincode: data.pincode
          });
        })
        .catch(err => {
          console.error("Failed to fetch profile:", err);
          alert("Failed to load profile data.");
        });
    } else {
      alert("User ID not found. Please login again.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBackToProfile = () => {
    navigate('/user/dashboard/view-profile');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uid = localStorage.getItem("uid");

    if (!uid) {
      alert("User ID not found. Please login again.");
      return;
    }

    const payload = {
      uname: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
      pincode: formData.pincode,
    };

    try {
      const res = await fetch(`http://localhost:8080/user/editProfile/${uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const msg = await res.text();
      alert(msg);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Something went wrong while updating profile.");
    }
  };

  return (
    <div className="edit-profile-container" style={{ marginTop: "50px" }}>
    <form className="edit-profile-form" onSubmit={handleSubmit} style={{ width: "600px", maxWidth: "90%", marginTop: "50px" }}>
      <div className="avatar-icon">
        <i className="fa fa-user-edit"></i>
      </div>
      <h2>Edit Profile</h2>
  
      <div className="input-group-edit">
        <i className="fa fa-user icon"></i>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="input-group-edit">
        <i className="fa fa-envelope icon"></i>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="input-group-edit">
        <i className="fa fa-phone icon"></i>
        <input
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="input-row-edit">
        <div className="input-group-edit">
          <i className="fa fa-city icon"></i>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="input-group-edit">
          <i className="fa fa-map-pin icon"></i>
          <input
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
  
      <button type="submit" className="edit-profile-button">Update Profile</button>
  
      <button type="button" className="back-profile-button" onClick={handleBackToProfile}>Back to Profile</button>
    </form>
  </div>
    );
};

export default EditProfile;
