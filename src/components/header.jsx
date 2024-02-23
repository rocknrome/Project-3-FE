import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src="../assets/images/logo.png" alt="Logo" />
      </div>

      <div className="app-name">
        <h1 style={{ fontWeight: 'bold' }}>FLASH CARDS APP</h1>
      </div>



    </nav>
  )
}

export default Header;
