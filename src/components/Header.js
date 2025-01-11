// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/about" style={styles.navLink}>About</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/contact" style={styles.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center'
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  navItem: {
    margin: '0 15px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Header;