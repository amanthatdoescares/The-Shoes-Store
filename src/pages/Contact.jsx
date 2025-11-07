import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: "800",
          marginBottom: "40px",
          color: "var(--grey)",
        }}
      >
        Contact Us
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Form */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "var(--grey)",
            }}
          >
            Get In Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "15px",
                fontSize: "18px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "15px",
                fontSize: "18px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{
                padding: "15px",
                fontSize: "18px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                width: "100%",
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                fontWeight: "700",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Store Contact Info */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "var(--grey)",
            }}
          >
            Store Information
          </h2>
          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "var(--grey)",
            }}
          >
            <p style={{ marginBottom: "15px" }}>
              <strong>Email:</strong>
              <br />
              support@nike.com
            </p>
            <p style={{ marginBottom: "15px" }}>
              <strong>Phone:</strong>
              <br />
              +1 (800) 806-6453
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              One Bowerman Drive
              <br />
              Beaverton, OR 97005
              <br />
              United States
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
