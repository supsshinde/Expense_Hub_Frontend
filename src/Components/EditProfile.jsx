import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "Vrushali Gaikwad",
    email: "vrushali@example.com",
    mobile: "9876543210",
    city: "Pune",
    pincode: "411001"
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    // Call backend API here to update profile
    alert("Profile updated successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Pincode</label>
          <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
