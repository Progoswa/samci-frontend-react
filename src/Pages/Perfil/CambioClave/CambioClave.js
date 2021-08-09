import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";

const CambioClave = () => {
  
  //State para Iniciar Sesion
  const [Usuario, handleInputChange] = useForm({
    ContraseñaActual: "",
    Password: "",
    PasswordConfirm:""
  });

  // Extrae de Usuario
  const { ContraseñaActual, Password, PasswordConfirm } = Usuario;
  const [error, guardarError] = useState(false);
  const {enviado , getEnviado} = useState(false);
  //Validaciones
  const [Igual , getIgual] = useState(false);
  const [LetrasNumeros, getLetrasNumeros ] = useState(false);
  const [Caracteres, getCaracteres ] = useState(false);
  const [CaracteresMin, getCaracteresMin ] = useState(false);
  const [Confirm, getConfirm ] = useState(false);
  const [mensaje, getMensaje ] = useState(''); 

  //Iniciar Sesion
  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
     console.log(Usuario)
    }
  };
  
  const isFormValid = () => {
   
    if (ContraseñaActual.trim().length === 0 || Password.trim().length === 0 || PasswordConfirm.trim().length === 0 ) { 
      guardarError(true);
      getMensaje('Todos los Campos Son Obligatorios')
      return false;
    } else if (Password.trim().length <= 8) {
        guardarError(true);
        getMensaje('La Contraseña debe ser de más de 8 caracteres')
        return false;
    } else if (Password !== PasswordConfirm) {
        guardarError(true);
        getMensaje('Las Contraseñas No son Iguales')
        return false;
    }


    guardarError(false);
    return true;
  };

  /*
  else if (e.target.validity.valid) {
        guardarError(true);
        getMensaje('La Contraseña debe contener letras y numeros')
        return false;
    }
  */

  const hideError = () => {
    guardarError(false);
  };

  return (
    <form className='px-2' onSubmit={handleLogin}>
      {error ? (
        <div
          className="alert alert-danger text-center font-weight-bold"
          role="alert"
        >
          {mensaje}
        </div>
      ) : null}
      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="password">
          Contraseña Actual:
        </label>
        <div className="input-affix m-b-10">
          <i className="prefix-icon anticon anticon-lock"></i>
          <input
            type="Password"
            name="ContraseñaActual"
            placeholder="Contraseña Actual"
            value={ContraseñaActual}
            onChange={handleInputChange}
            onKeyPress={hideError}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="password">
          Contraseña: 
        </label>
        <div className="input-affix m-b-10">
          <i className="prefix-icon anticon anticon-lock"></i>
          <input
            type="Password"
            name="Password"
            placeholder="Contraseña"
            value={Password}
            onKeyPress={hideError}
            onChange={handleInputChange}
            className="form-control"
            pattern="?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,12}"
          />
        </div>
      </div>
     
      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="password">
          Confirmar Contraseña: 
        </label>
        <div className="input-affix m-b-10">
          <i className="prefix-icon anticon anticon-lock"></i>
          <input
            type="Password"
            name="PasswordConfirm"
            placeholder="Confirmar Contraseña"
            value={PasswordConfirm}
            onKeyPress={hideError}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="d-flex align-items-center justify-content-end">
          <span className="font-size-13 text-muted"></span>
          {enviado ? (
            <button  className="btn font-weight-bold boton">
              Guardando Cambios
            </button>
          ) : (
            <button
              type="submit"
              className="btn font-weight-bold btn-primary"
            >
              Cambiar mi Contraseña
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default CambioClave;



