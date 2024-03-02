import React from 'react';
import { FaChevronLeft, FaHome } from 'react-icons/fa';
import logo from './img/chatte_logo.png'
import EmailForm from './EmailForm';


function Homepage() {
  return (
    <div>
      <header>
        <div id='Navbar' className='container'>
          <div className='Navbar_FaChevronLeft_Icon'>
            <FaChevronLeft className='icon'/>
          </div>
          
            <div id='Navbar_Icon'>
              <FaHome className='Navbar_FaHome_Icon'/>
            </div>
          <div>
            <h2 className='Components_Titles'>Homepage</h2>
            <h6>online</h6>
          </div>
        </div>
      </header>
      <hr />
      <div className="frame">
      <div className="logo-wrapper">
        <img src={logo} className="logo" alt="Logo"  />
      </div>
        <EmailForm />
    </div>
    </div>
  );
}

export default Homepage;
