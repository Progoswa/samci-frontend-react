import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ClientesAdmin from "./Admin/ClientesAdmin";
import ClientInveted from "./Invited/ClientInveted";

const Clientes = () => {
  const rol = localStorage.getItem("rol");
  const { uid } = useSelector((state) => state.auth);
  
  return (
    <div className="main-content">
      {rol === "1" ? (
        <>
          <div className="page-header">
            <h2 className="header-title">Clientes</h2>
            <div className="header-sub-title">
              <nav className="breadcrumb breadcrumb-dash">
                <Link to="/" className="breadcrumb-item">
                  <i className="anticon anticon-home m-r-5"></i>Home
                </Link>
                <span className="breadcrumb-item active">Clientes</span>
              </nav>
            </div>
          </div>
          <ClientesAdmin />
        </>
      ) : (
        <>
          <div className="page-header">
            <h2 className="header-title">Registrar Datos</h2>
            <div className="header-sub-title">
              <nav className="breadcrumb breadcrumb-dash">
                <Link to="/" className="breadcrumb-item">
                  <i className="anticon anticon-home m-r-5"></i>Home
                </Link>
                <span className="breadcrumb-item active">Registrar Datos</span>
              </nav>
            </div>
          </div>
          <ClientInveted id={Number(uid)} />
        </>
      )}
    </div>
  );
};

export default Clientes;
