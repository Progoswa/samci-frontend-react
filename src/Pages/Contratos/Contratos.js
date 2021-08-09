import React from "react";
import { Link } from "react-router-dom";
import ContratosAdmin from "./admin/ContratosAdmin";
import ContratosUser from "./User/ContratosUser";



const Contratos = () => {

  const rol = localStorage.getItem("rol");

  return (
    <div className="main-content">
      <div className="page-header">
        <h2 className="header-title">Contratos</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <Link to="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Inicio
            </Link>
            <span className="breadcrumb-item active">Contratos</span>
          </nav>
        </div>
      </div>
      {rol === '1' ?
      ( 
      <>  
      <button
       type="button"
       className="btn btn-primary"
       data-toggle="modal"
       data-target="#Newcontract"
     >
       Nuevo Contrato
     </button> 
      <ContratosAdmin/> 
      </>
      )
      : 
      <ContratosUser/>}
     
      
    </div>
  );
};

export default Contratos;
