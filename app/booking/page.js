"use client";
import { useState } from "react";

const services = [
  "Mahira",
  "Madap",
  "Mehendi",
  "Haldi",
  "Engagement",
  "Gate & Entry Decor",
  "Coolers"
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-center mb-4">Book Your Event</h1>
      {submitted ? (
        <div className="alert alert-success text-center" role="alert">
          Thank you for your booking! We will contact you soon.
        </div>
      ) : (
        <form className="mx-auto" style={{ maxWidth: 500 }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" required />
          </div>
          <div className="mb-3">
            <label htmlFor="service" className="form-label">Service</label>
            <select className="form-select" id="service" required>
              <option value="">Select a service</option>
              {services.map((service, idx) => (
                <option key={idx} value={service}>{service}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date</label>
            <input type="date" className="form-control" id="date" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Book Now</button>
        </form>
      )}
    </div>
  );
} 