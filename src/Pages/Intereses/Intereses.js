import React from 'react';
import { Link } from 'react-router-dom';

const Intereses = () => {
    return (
        <div div className="main-content">
          <div className="page-header">
        <h2 className="header-title">Intereses</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <Link to="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Inicio
            </Link>
            <span className="breadcrumb-item active">Intereses</span>
          </nav>
        </div>
      </div>
        </div>
    );
};

export default Intereses;