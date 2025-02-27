import React from "react";

const About = () => {
  return (
    <div style={styles.aboutContainer}>
      <h1 style={styles.heading}>About Our URL Shortener</h1>
      <p style={styles.paragraph}>
        Welcome to our advanced URL shortening service! Our platform allows you
        to shorten long URLs into compact, shareable links while tracking
        analytics for user engagement.
      </p>
      <h2 style={styles.subHeading}>Key Features</h2>
      <ul style={styles.list}>
        <li>Instant URL shortening</li>
        <li>Custom short links</li>
        <li>Real-time analytics and tracking</li>
        <li>QR code generation</li>
        <li>Secure and reliable redirection</li>
      </ul>
      <h2 style={styles.subHeading}>Why Choose Us?</h2>
      <p style={styles.paragraph}>
        Our URL shortener provides detailed insights into link performance,
        including click-through rates, geographical data, and device tracking.
        We ensure a seamless and secure experience for all users.
      </p>
    </div>
  );
};

const styles = {
  aboutContainer: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    color: "blue-600",
  },
  heading: {
    fontSize: "2rem",
    color: "#007bff",
  },
  subHeading: {
    fontSize: "1.5rem",
    marginTop: "20px",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
  list: {
    paddingLeft: "20px",
  },
};

export default About;
