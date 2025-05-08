import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    navigate('/user/dashboard/view-profile'); // Navigate back to profile view page
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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h2 className="mb-4 text-center">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="text" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">City</label>
                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Pincode</label>
                <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">Update Profile</button>
              </div>
            </form>
            <div className="mt-3 text-center">
              <button onClick={handleBackToProfile} className="btn btn-secondary w-100">Back to Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
