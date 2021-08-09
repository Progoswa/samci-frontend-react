import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin, checkingSend } from "../../../../actions/auth";
import { useForm } from "../../../../hooks/useForm";

import "./formLogin.css";

const FormLogin = () => {
  const dispatch = useDispatch();
  const { enviado } = useSelector((state) => state.auth);

  //State para Iniciar Sesion
  const [Usuario, handleInputChange] = useForm({
    UserName: "",
    Password: "",
  });

    /*UserName: "admin@admin.com",
    Password: "password",*/

  // Extrae de Usuario
  const { UserName, Password } = Usuario;
  const [error, guardarError] = useState(false);

  const SendUsuario = {
    email: UserName,
    password: Password,
  };

  //Iniciar Sesion
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(enviado);
    if (isFormValid()) {
      dispatch(checkingSend());
      dispatch(startLogin(SendUsuario));
    }
  };

  const isFormValid = () => {
    if (UserName.trim().length === 0 || Password.trim().length === 0) {
      console.log("usuario Requerido");
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
          Todos los campos son obligatorios
        </div>
      ) : null}
      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Nombre de Usuario:
        </label>
        <div className="input-affix">
          <i className="prefix-icon anticon anticon-user"></i>
          <input
            type="text"
            name="UserName"
            id="userName"
            placeholder="Nombre de Usuario"
            value={UserName}
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
        <Link
          className="float-right font-size-13 text-muted"
          to="/GetBackPassword"
        >
          ¿Has olvidado la Contraseña?
        </Link>
        <div className="input-affix m-b-10">
          <i className="prefix-icon anticon anticon-lock"></i>
          <input
            type="Password"
            name="Password"
            id="password"
            placeholder="Contraseña"
            value={Password}
            onChange={handleInputChange}
            onKeyPress={hideError}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex align-items-center justify-content-between">
          <span className="font-size-13 text-muted"></span>
          {enviado ? (
            <button  className="btn font-weight-bold boton">
              Ingresando
            </button>
          ) : (
            <button
              type="submit"
              className="btn font-weight-bold btn-primary"
            >
              Ingresar
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default FormLogin;
