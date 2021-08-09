import React from "react"
import {Link} from 'react-router-dom'
//import Notification from '../Notifications/Notification'
import EditarPerfil from '../EditarPerfil/EditarPerfil'

const Navbar = (props) => {

 
  return (
  
        <div className="header">
          <div className="logo logo-dark">
            <Link to="/">
            <img src="assets/images/logo/logo_samci_web.png" alt=""
                style={{
                 width:'55%',
                 marginTop:'10px'
                }}
              />
              <img
                className="logo-fold"
                src="./assets/images/logo/favicon.jpeg"
                alt="Logo"
                style={{
                  width:'55%',
                  marginTop:'15px',
                  marginLeft:'15px'
                 }}
              />
            </Link>
          </div>
          <div className="nav-wrap">
            <ul className="nav-left">
              <li className="desktop-toggle">
                <a href="#!" onClick={props.handleClick}>
                  <i className="anticon"></i>
                </a>
              </li>
             <li className="mobile-toggle ">
                <a href="#!" onClick={props.handleClick}>
                  <i className="anticon"></i>
                </a>
              </li>
            </ul>
            <ul className="nav-right" >
           {/*<Notification/>*/}
            <EditarPerfil/>
            </ul>
          </div>
        </div>
  );
};

export default Navbar;
