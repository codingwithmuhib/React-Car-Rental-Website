import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    aadharNumber: "",
    numPersons: "1 person",
    journeyStartDate: "",
    journeyEndDate: "",
    journeyTime: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Valid Email is required";
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) formErrors.phoneNumber = "Valid 10-digit Phone Number is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.aadharNumber || formData.aadharNumber.length !== 12) formErrors.aadharNumber = "Valid 12-digit Aadhar Number is required";
    if (!formData.journeyStartDate) formErrors.journeyStartDate = "Start Date is required";
    if (!formData.journeyEndDate) formErrors.journeyEndDate = "End Date is required";
    if (!formData.journeyTime) formErrors.journeyTime = "Journey Time is required";

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      axios.post("http://localhost:9001/api/bookings", formData)
        .then((response) => {
          console.log(response.data);
          navigate("/payment");
        })
        .catch((error) => {
          console.error("There was an error submitting the form!", error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
         
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="error">{errors.address}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
         
          name="aadharNumber"
          placeholder="Aadhar Number"
          value={formData.aadharNumber}
          onChange={handleChange}
        />
        {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="numPersons" value={formData.numPersons} onChange={handleChange}>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        From: 
        <input
          type="date"
          name="journeyStartDate"
          value={formData.journeyStartDate}
          onChange={handleChange}
        />
        {errors.journeyStartDate && <span className="error">{errors.journeyStartDate}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        To: 
        <input
          type="date"
          name="journeyEndDate"
          value={formData.journeyEndDate}
          onChange={handleChange}
        />
        {errors.journeyEndDate && <span className="error">{errors.journeyEndDate}</span>}
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          name="journeyTime"
          value={formData.journeyTime}
          onChange={handleChange}
          className="time__picker"
        />
        {errors.journeyTime && <span className="error">{errors.journeyTime}</span>}
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          name="description"
          className="textarea"
          placeholder="Write any further description"
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
     <center> <button type="submit" className="submit-button">Submit</button></center>
    </Form>
  );
};

export default BookingForm;
