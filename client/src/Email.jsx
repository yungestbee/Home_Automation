import React, { useEffect, useState } from "react";

export default function Email() {
  const [email, setEmail] = useState("");
  const [currentEmail, setCurrentEmail] = useState(null);
  const [message, setMessage] = useState("");

  const API_BASE = "https://your-backend.onrender.com"; // change to your backend URL

  // Fetch current email when page loads
  useEffect(() => {
    fetch(`${API_BASE}/email`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.address) {
          setCurrentEmail(data.address);
        }
      })
      .catch((err) => console.error("Error fetching email:", err));
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_BASE}/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: email }),
      });

      const data = await res.json();

      if (res.ok) {
        setCurrentEmail(data.email.address);
        setMessage("✅ Email updated successfully");
        setEmail("");
      } else {
        setMessage("❌ " + data.error || "Failed to update email");
      }
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}
    >
      <h2>Email Notification Settings</h2>

      <p>
        <strong>Current Email:</strong>{" "}
        {currentEmail ? currentEmail : "No email set yet"}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter new email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "8px",
            width: "100%",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Save Email
        </button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}
