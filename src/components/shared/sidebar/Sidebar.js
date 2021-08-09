import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

const Sidebar = ({ item }) => {
 const history =  useHistory();
  
  function handleClick(e) {
    if(item.path==='#!')
    {
      e.preventDefault()
      ClickMenu()
      ;}
    else{
      history.push(item.path)
    }
  }

  var contadorsub = useState(0)

  function ClickMenu() {
   
    if (contadorsub ===0){
      document.getElementById(item.id).classList.remove ("d-block")
     
      contadorsub=1  
    } else {
      document.getElementById(item.id).classList.add("d-block")
    
      contadorsub=0
    }
    }

  return (
    <li className="nav-item dropdown "  >
      <Link className="dropdown-toggle" 
      to={item.path}
      onClick={handleClick}
      >
        <span className="icon-holder">
          <i className={item.icon}></i>
        </span>
        <span className="title">{item.title}</span>
        <span className={item.arrow}>
         <i className='fas fa-angle-down'></i> 
        </span>
      </Link>
      <ul id={item.id} className='dropdown-menu listaMenu  ' style={{display: "none"}}>
        {item.subNav.map((SubItem) => (
         
          <li key={SubItem.id}>
          <Link
            to={SubItem.path}
          >
          {SubItem.title}
          </Link>
           </li>
          
      )  )}
      </ul>
    </li>
  );
};

export default Sidebar;


/*
Por si me llega a servir alguna vez

 var contadorsub = useState(0)

  function ClickMenu() {

    for(var ib = 0; ib< cambioSub.length; ib++)
    {
      cambioSub[ib].classList.remove("ocultar")
    };

    if (contadorsub ===0){
      document.getElementById(item.id).classList.remove ("d-block")
      //document.getElementById(item.id).classList.add("d-none")
      contadorsub=1 
    } else {
      document.getElementById(item.id).classList.add("d-block")
      contadorsub=0
    }
    }

        document.getElementById('flecha').classList.remove ("fas fa-angle-up")
      document.getElementById('flecha').classList.add("arrow-icon")



      <li className="nav-item dropdown "  >
      <Link className="dropdown-toggle" 
      to={item.path}
      onClick={handleClick}
      >
        <span className="icon-holder">
          <i className={item.icon}></i>
        </span>
        <span className="title">{item.title}</span>
        <span className={item.arrow}>
         <i className='fas fa-angle-down'></i> 
        </span>
      </Link>
      <ul id={item.id} className='dropdown-menu listaMenu  ' style={{display: "none"}}>
        {item.subNav.map((SubItem) => (
         
          <li key={SubItem.id}>
          <Link
            to={SubItem.path}
          >
          {SubItem.title}
          </Link>
           </li>
          
      )  )}
      </ul>
    </li>

*/