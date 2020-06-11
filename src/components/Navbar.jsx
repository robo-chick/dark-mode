import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { NavLink } from 'react-router-dom';



const Navbar = (key, initialValue) => {
  const [darkMode, setDarkMode] = useDarkMode(key, initialValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="nav-left">
      <h1>Crypto Tracker</h1>
      <NavLink className='navLink' to='/'>Home</NavLink>
      <NavLink className='navLink' to='events'>Events</NavLink>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
