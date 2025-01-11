// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My DC App. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0
  }
};

export default Footer;