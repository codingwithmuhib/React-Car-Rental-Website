import React, { useState } from 'react';
import '../../styles/License.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    licenseNumber: '',
    aadhaarNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/book-service', { // Adjust the endpoint URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Service successfully booked!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          licenseNumber: '',
          aadhaarNumber: ''
        });
      } else {
        alert('Failed to book service. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the service.');
    }
  };

  return (
    <div className="license-contact-container">
\      <h1>Your Contact Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="license-form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="licenseNumber">License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="carModel">Car Model:</label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="aadhaarNumber">Aadhaar Number:</label>
          <input
            type="text"
            id="aadhaarNumber"
            name="aadhaarNumber"
            value={formData.aadhaarNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="license-form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="license-button">Book Now</button>
      </form>
    </div>
  );
};

export default Contact;