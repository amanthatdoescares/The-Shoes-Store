import React from "react";

const Location = () => {
  return (
    <main
      className="container"
      style={{ padding: "40px 0", color: "var(--grey)" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "40px",
          color: "var(--grey)",
        }}
      >
        Find Us
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Nike Store
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            <strong>Address:</strong>
            <br />
            Phoenix Market City
            <br />
            LBS Marg, Kurla West
            <br />
            Mumbai, Maharashtra 400070
            <br />
            India
          </p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            <strong>Contact Number:</strong>
            <br />
            +91 22 1234 5678
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            <strong>Opening Hours:</strong>
            <br />
            Monday - Friday: 10:00 AM - 9:00 PM
            <br />
            Saturday: 10:00 AM - 8:00 PM
            <br />
            Sunday: 11:00 AM - 7:00 PM
          </p>
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.888!3d19.086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c5b4c4c4c4%3A0x4c4c4c4c4c4c4c4c!2sPhoenix%20Market%20City%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nike Store Location"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Location;
