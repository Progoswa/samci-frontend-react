import React from 'react';
import { Link } from 'react-router-dom';

const DetallesPago = () => {
    return (
        <div div className="main-content">
        <div className="page-header">
      <h2 className="header-title">Detalles de Pagos de Clientes por Mes</h2>
      <div className="header-sub-title">
        <nav className="breadcrumb breadcrumb-dash">
          <Link to="/" className="breadcrumb-item">
            <i className="anticon anticon-home m-r-5"></i>Inicio
          </Link>

          <Link to="/Reportes" className="breadcrumb-item">
            <i className="anticon anticon-home m-r-5"></i>Reportes
          </Link>

          <span className="breadcrumb-item active">Detalles de Pagos de Clientes por Mes</span>
        </nav>
      </div>
    </div>
      </div>
    );
};

export default DetallesPago;