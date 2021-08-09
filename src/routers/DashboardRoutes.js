import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//import {useSelector} from 'react-redux'
//Components
import Header from "../components/shared/header/Header";
//Pages
import Dashboard from "../Pages/Dashboard/Dashboard";
import Perfil from "../Pages/Perfil/Perfil";
import Contratos from "../Pages/Contratos/Contratos";
import Clientes from "../Pages/Clientes/Clientes";
import ClientesExpediente from "../Pages/Clientes/Admin/Expediente/ClientesExpediente";
import Usuarios from "../Pages/Usuarios/Usuarios";
import Pagos from "../Pages/Pagos/Pagos";
import E404 from "../Pages/E404/E404";
import Simulador from "../Pages/Simulador/Simulador" 
import TablaPagos from "../Pages/Simulador/TablaSimulador"
import Gestion from "../Pages/Gestion/Gestion"
import Reportes from "../Pages/Reportes/Reportes"
import ContratosActivos from "../Pages/Reportes/ContratosActivos/ContratosActivos"
import Intereses from "../Pages/Intereses/Intereses";
import DetalleContrato from "../Pages/Reportes/DetalleContrato/DetalleContrato";
import ContratosActivosTodos from "../Pages/Reportes/ContratosActivosTodos/ContratosActivosTodos";
import DetallesPago from "../Pages/Reportes/DetallesPago/DetallesPago";


const DashboardRoutes = () => {
  /*const state = useSelector( state => state);
  console.log(state)*/

  const [contador, getContador] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    console.log('click')
    if (contador === 1) {
      document.getElementById("isFolded").classList.remove("is-folded");
      document.getElementById("isFolded").classList.remove("is-expand");
      getContador(0) 
    } else {
      document.getElementById("isFolded").classList.add("is-folded");
      document.getElementById("isFolded").classList.add("is-expand");
      getContador(1)
    }
  }

  return (
    <>
      <div id="isFolded" className="app">
        <div className="layout">
          <Header handleClick={handleClick} />
          <div className="page-container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/profile" component={Perfil} />
              <Route exact path="/contract" component={Contratos} />
              <Route exact path="/customers" component={Clientes} />
              <Route  path="/customers:id" component={ClientesExpediente} />
              <Route exact path="/users" component={Usuarios} />
              <Route exact path="/Payments" component={Pagos} />
              <Route exact path="/Simulator" component={Simulador} />  
              <Route exact path="/SimulatorTable" component={TablaPagos} />  
              <Route exact path="/Gestion" component={Gestion} /> 
              {/*Seccion Reportes*/}
              <Route exact path="/Reportes" component={Reportes} /> 
              <Route exact path="/ContratosActivos" component={ContratosActivos} /> 
              <Route exact path="/DetallesContratoIndividual" component={DetalleContrato} /> 
              <Route exact path="/ContratosActivosTodos" component={ContratosActivosTodos} />
              <Route exact path="/DetallesPago" component={DetallesPago} />
              {/*FIN Seccion Reportes*/}
              <Route exact path="/Intereses" component={Intereses} /> 

              <Route component={E404} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRoutes;

//<Redirect to="/Dashboard" />
