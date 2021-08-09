import React from 'react';
import TarjetasContratos from './TarjetasContratos';
import {Link} from 'react-router-dom'
//import TablaSimulador from './TablaSimulador'

const Simulador = () => {
    return (
        <div className="main-content">
            <div className="page-header">
        <h2 className="header-title">Simulador</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <Link to="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Home
            </Link>
            <span className="breadcrumb-item active">Simulador</span>
          </nav>
        </div>
      </div>
      <h1 className='text-center'>Ingrese Monto a Invertir</h1>
      <br></br>
             <TarjetasContratos/>
            {/*<TablaSimulador/>*/}
        </div>
    );
};

export default Simulador;