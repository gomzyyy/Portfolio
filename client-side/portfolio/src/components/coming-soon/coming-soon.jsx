import React from "react";
import "./coming-soon.css"

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Coming Soon</h1>
        <p style={styles.text}>
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="rotate"></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  card: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "36px",
    color: "#333333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#666666",
    marginBottom: "30px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #f3f4f6",
    borderTop: "4px solid #333333",
    borderRadius: "50%",
    animation: "spin 2s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
};

export default ComingSoon;