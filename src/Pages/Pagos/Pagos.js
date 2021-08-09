import React from 'react';
import PagosAdmin from './admin/PagosAdmin'

const Pagos = () => {

  const rol = localStorage.getItem('rol');

    return (
        <div className="main-content">
      <div className="page-header">
        <h2 className="header-title">Pagos</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <a href="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Home
            </a>
            <span className="breadcrumb-item active">Pagos</span>
          </nav>
        </div>
      </div>

        {rol === '1' &&
        (<button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#NewPago"
         >
          Nuevo Pago
        </button>) 
        }
     
     <PagosAdmin/>
      
    </div>
    );
};

export default Pagos;