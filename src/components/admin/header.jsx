import React, { useEffect } from 'react';

const Header = () => {
  const handleNavbar = () => {
    var body = document.querySelector('body');
    var header = document.querySelector('header');
    var sidebar = body.querySelector('nav');
    var toggle = header.querySelector('.fa-bars');

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
    });
  }

  useEffect(() => {
    handleNavbar()
  }, [])

  return (
    <header>
        <div className="left-navbar">
            <i className="fa-solid fa-bars" onClick={handleNavbar}></i>
            <img className="navbar-logo" src="/assets/tokopaedi-text.png" alt="tokopaedi-text" />
        </div>
        <div className="right-navbar">
            <i className="fa-regular fa-bell"></i>
            <div className="profile-box">
                <i className="fa-solid fa-circle" style={{ color: "#61c156" }}></i>
                <p>Admin</p>
            </div>
        </div>
    </header>
  )
}

export default Header