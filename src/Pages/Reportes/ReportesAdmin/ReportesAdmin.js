import React from 'react';
import { Link } from 'react-router-dom';
import './ReportesAdmin.css'

const ReportesAdmin = () => {
    return (
        <div div className="main-content">
          <div className="page-header">
        <h2 className="header-title">Reportes</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <Link to="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Inicio
            </Link>
            <span className="breadcrumb-item active">Reportes</span>
          </nav>
        </div>
      </div>

   <div className="row col-sm-12 justify-content-between">
  <div className="col-sm-4">
  <Link to="/ContratosActivos">  
  <div className="card">
    <img className="card-img-top AlturaImg" src="assets/images/reportes/contrato.JPG" alt="Card cap"/>
    <div className="card-body">
      <h5 className='textReportCard'>Contratos Activos por Clientes</h5>
      
    </div>
  </div>
  </Link>
  </div>
  <div className="col-sm-4">
  <Link to="/DetallesContratoIndividual">  
  <div className="card">
    <img className="card-img-top AlturaImg" src="assets/images/reportes/detalleContrato.jpg" alt="Card cap"/>
    <div className="card-body">
    <h5 className='textReportCard'>Detalle de Contrato Individual</h5>
    </div>
  </div>
  </Link>
  </div>

  <div className="col-sm-4">
  <Link to="/ContratosActivosTodos">  
  <div className="card">
    <img className="card-img-top AlturaImg" src="assets/images/reportes/ContratoActivo.jpg" alt="Card cap"/>
    <div className="card-body">
    <h5 className='textReportCard'>Todos los Contratos Activos</h5>
    </div>
  </div>
  </Link>
  </div>

  <div className="col-sm-4">
  <Link to="/DetallesPago">  
  <div className="card">
    <img className="card-img-top AlturaImg" src="assets/images/reportes/pagoClientes.jpg" alt="Card cap"/>
    <div className="card-body">
    <h5 className='textReportCard'>Detalles de Pagos de Clientes por Mes</h5>
    </div>
  </div>
  </Link>
  </div>

  <div className="col-sm-4">
  <Link to="/ContratosActivos">  
  <div className="card">
    <img className="card-img-top AlturaImg" src="assets/images/reportes/carteraTotal.jpg" alt="Card cap"/>
    <div className="card-body">
    <h5 className='textReportCard'>Cartera Total de Inversion</h5>
    </div>
  </div>
  </Link>  
  </div>

  <div className="col-sm-4">
  <Link to="/ContratosActivos">  
  <div className="card">
    <img className="card-img-top AlturaImg" src="assets/images/reportes/imprimir.png" alt="Card cap"/>
    <div className="card-body">
    <h5 className='textReportCard'>Imprimir Contratos</h5>
    </div>
  </div>
  </Link>
  </div>

</div>
        </div>
    );
};

export default ReportesAdmin;