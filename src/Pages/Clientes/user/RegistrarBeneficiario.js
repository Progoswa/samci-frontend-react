import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { fetchSinToken } from "../../../helpers/fetch";
import BeneficiarioValidator from "../Admin/Expediente/Beneficiario/BeneficiarioValidator";

const RegistrarBeneficiario = ({id}) => {

  //State para Registro
  const [Beneficiario, getBeneficiario] = useState({
     tipo:"CEDULA",
     numero:"",
     nombres:"",
     apellidos:"",
     pais:"",
     ciudad:"",
     direccion:"",
     email:"",
     telefono: "",
     customer: id
  });

  // Extrae de Usuario
  const {tipo, numero, nombres, apellidos , pais, ciudad, direccion, email, telefono } = Beneficiario;

  //Onchange
  const handleInputChange = ({target}) => {
    const esValido = target.validity.valid;
    if (esValido) {

      getBeneficiario ({
            ...Beneficiario ,
            [target.name] : target.value
        });
    }  
   }  

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);
  //Registro
  const handleBeneficiario = (e) => {
    e.preventDefault();
    SetError(BeneficiarioValidator(Beneficiario));
    getDataIsCorrect(true);
  };

  const send = async () => {
    console.log(Beneficiario);
    getEditandoBe(false);
    try {
      await fetchSinToken(`customer/beneficiary`,Beneficiario, "POST");
      Swal.fire({
        icon: "success",
        title: "Beneficiario Registrado",
      });
      getEditandoBe(true);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "No se pudo completar la accion",
      });
      getEditandoBe(true);
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && DataIsCorrect) {
      send();
    }
  }, [error, DataIsCorrect]);

  //Editar
  const [active, getActive] = useState(true);
  const [contador, getContador] = useState(0);
  const Editar = () => {
    if (contador === 0) {
      getActive(false);
      getContador(1);
      console.log(contador, active);
    } else if (contador === 1) {
      getActive(true);
      getContador(0);
      console.log(contador, active);
    }
  };

  //Boton Enviar
  const [editandoBe, getEditandoBe] = useState(true);

  return (
    <div>
      <form onSubmit={handleBeneficiario}>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="form-group col-lg-6 col-md-12">
        <label className="font-weight-semibold" htmlFor="userName">
        Tipo de Identidad:
        </label>
        <select className="form-control"
         name="tipo" 
         value={tipo} 
         onChange={handleInputChange}
         disabled={active}
         >
        <option value="CEDULA">CEDULA</option>
        <option value="PASAPORTE">PASAPORTE</option>
    </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Numero de Identidad:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Numero de Identidad"
            name="numero"
            value={numero}
            onChange={handleInputChange}
            pattern="[0-9]{0,15}"
            disabled={active}
          />
          {error.numero && (
            <p className="font-weight-bold text-danger">
              {error.numero}
            </p>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Nombres:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombres"
            name="nombres"
            value={nombres}
            onChange={handleInputChange}
            pattern="[A-Za-z ]{1,15}"
            disabled={active}
          />
          {error.nombres && (
            <p className="font-weight-bold text-danger">{error.nombres}</p>
          )}
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Apellidos:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellidos"
            name="apellidos"
            value={apellidos}
            onChange={handleInputChange}
            pattern="[A-Za-z ]{1,15}"
            disabled={active}
          />
          {error.apellidos && (
            <p className="font-weight-bold text-danger">{error.apellidos}</p>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            País:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="País"
            name="pais"
            value={pais}
            onChange={handleInputChange}
            pattern="[A-Za-z]{1,15}"
            disabled={active}
          />
          {error.pais && (
            <p className="font-weight-bold text-danger">{error.pais}</p>
          )}
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Ciudad:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ciudad"
            name="ciudad"
            value={ciudad}
            onChange={handleInputChange}
            pattern="[A-Za-z ]{1,15}"
            disabled={active}
          />
          {error.ciudad && (
            <p className="font-weight-bold text-danger">{error.ciudad}</p>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between flex-wrap">
        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Direccion:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="País"
            name="direccion"
            value={direccion}
            onChange={handleInputChange}
            pattern="^[a-zA-Z ]+$"
            disabled={active}
          />
          {error.direccion && (
            <p className="font-weight-bold text-danger">{error.direccion}</p>
          )}
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Telefono:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Telefono"
            name="telefono"
            value={telefono}
            onChange={handleInputChange}
            pattern="[+0-9]{0,15}"
            disabled={active}
          />
          {error.telefono && (
            <p className="font-weight-bold text-danger">{error.telefono}</p>
          )}
        </div>
      </div>

      <div className="form-group col-lg-6 col-md-12">
        <label className="font-weight-semibold" htmlFor="email">
          Correo:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Correo"
          name="email"
          value={email}
          onChange={handleInputChange}
          disabled={active}
        />
        {error.email && (
          <p className="font-weight-bold text-danger">{error.email}</p>
        )}
      </div>

        <div className="row">
          <div className="col-md-6 "></div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary mr-3 "
              onClick={Editar}
            >
              {active ? (
                <i className="fas fa-unlock"></i>
              ) : (
                <i className="fas fa-lock"></i>
              )}
            </button>
            {editandoBe ? (
              <button
                type="submit"
                className="btn btn-primary "
                disabled={active}
              >
                Guardar Cambios
              </button>
            ) : (
              <button className="btn font-weight-bold boton">
                Guardando...
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrarBeneficiario;


