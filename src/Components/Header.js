// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1 className="logo">Druma.ai</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Services</li>
//           <li>About Us</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="logo">Druma.ai</h1>
      <nav>
        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <ul>
              <li onClick={toggleMenu}>Home</li>
              <li onClick={toggleMenu}>Services</li>
              <li onClick={toggleMenu}>About Us</li>
              <li onClick={toggleMenu}>Contact</li>
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
