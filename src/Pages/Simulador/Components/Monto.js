import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { fetchSinToken } from "../../../helpers/fetch";

const Monto = () => {

    const history = useHistory();

//Obtener Lista del Api
const [Contract, getContract] = useState([]);
const [loading, setLoading] = useState(false);
//const [status, setstatus] = useState(false);

useEffect(() => {
  ObtenerContratos();
}, []);

const ObtenerContratos = async () => {
  const data = await fetchSinToken("contracts");
  const ListadoTotal = await data.json();
  var Listado = ListadoTotal.data.filter(
    (contratos) => contratos.borrado === "0"
  );
  var ListadoStatus = Listado.filter(
      (contratos) => contratos. status === "1"
    );
   
  getContract(ListadoStatus);
  setLoading(true);
};


//State 
const [Simulador, getSimulador] = useState({
    monto: "",
  });

  //Onchange
  const handleInputChange = ({target}) => {
    const esValido = target.validity.valid;
    if (esValido) {

        getSimulador ({
            ...Simulador ,
            [target.name] : target.value
        });
    }  
   }  

  // 
  const { monto } = Simulador;
  const [error, guardarError] = useState(false);

  //
  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log(monto)
      console.log(Contract)
      /*localStorage.setItem('montoSimulador', monto)
      getMonto(monto)
      document.getElementById("IngreseMonto").click();
      history.push('/SimulatorTable')*/
    }
  };

  const isFormValid = () => {
    if (monto.trim().length === 0) {
      guardarError(true);
      return false;
    } else {
      guardarError(false);
    }
    return true;
  };

  const hideError = () => {
    guardarError(false);
  };

    return (
        <form onSubmit={handleLogin}>
        {error ? (
          <div
            className="alert alert-danger text-center font-weight-bold"
            role="alert"
          >
            El Monto es Reuerido
          </div>
        ) : null}
        <div className="form-group">
        
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Monto a Invertir"
                name="monto"
                value={monto}
                onChange={handleInputChange}
                onKeyPress={hideError}
                pattern="^[0-9]{0,10}"
              />

              <div className="input-group-append">
                <span className="input-group-text">$</span>
              </div>
            </div>
        </div>
        <div className="form-group">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font-size-13 text-muted"></span>
            <button
                type="submit"
                className="btn font-weight-bold btn-primary"
              >
                Iniciar Simulador
              </button>
          </div>
        </div>
      </form>
    );
};

export default Monto;