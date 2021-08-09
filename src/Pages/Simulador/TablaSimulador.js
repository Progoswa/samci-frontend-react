import React, {useState} from 'react';
import TablaSimuladorPagos from './TablaSimuladorPagos';
import {Link} from 'react-router-dom'

const TablaPagos = () => {
 
    return (
      <div className="main-content">
            <div className="page-header">
        <h2 className="header-title">Simulador</h2>
        <div className="header-sub-title">
        <nav className="breadcrumb breadcrumb-dash">
          <Link to="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Home
              <i className="fas fa-chevron-right ml-1"></i>
            </Link>
            <Link to="/Simulator">
            <span className="breadcrumb-item active ml-1">Contratos</span>
            <i className="fas fa-chevron-right ml-1"></i>
            </Link>
            <span className="breadcrumb-item active ml-1">Simulador</span>
          </nav>
        </div>
      </div>
      <br></br>
     
       <TablaSimuladorPagos />
       
        </div>
        
    );
};

export default TablaPagos;