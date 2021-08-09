import React from 'react';
import Navbar from "./Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import {MenuList, MenuListUser, MenuListInvited} from "../sidebar/MenuList"

const Header = (props) => {

  const rol = localStorage.getItem('rol');
 
    return (
       <>
         
          <Navbar handleClick={props.handleClick}/>
          <div className="side-nav ">
            <div className="side-nav-inner">
            <ul className="side-nav-menu scrollable">
             { rol === '1' ?
               MenuList.map( (item , index) => (
                   <Sidebar 
                        item={item}
                        key={ index }
                    />
                   
               ))
               : rol === '2' ?
               MenuListInvited.map( (item , index) => (
                <Sidebar 
                     item={item}
                     key={ index }
                 />            
            ))
            : 
            MenuListUser.map( (item , index) => (
              <Sidebar 
                   item={item}
                   key={ index }
               />            
          ))  
            } 
              </ul>
            </div>
          </div>
        </>
    );
};

export default Header;

