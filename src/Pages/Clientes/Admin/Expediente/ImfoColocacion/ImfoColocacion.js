import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../../../../hooks/useForm";
import ImfoColocacionValidator from "./ImfoColocacionValidator";

const ImfoColocacion = () => {
  //State para Registro
  const [ColocacionImfo, handleInputChange] = useForm({
    codigo:'',
    fecha:'',
    monto:''
  });

  // Extrae de Usuario
  const { codigo , fecha, monto  } =
    ColocacionImfo;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);
  //Registro
  const handleBeneficiario = (e) => {
    e.preventDefault();
    console.log(ColocacionImfo);
    SetError(ImfoColocacionValidator(ColocacionImfo));
    getDataIsCorrect(true);
  };

  const send = async () => {
    console.log(ColocacionImfo);
    getEditandoICo(false)
    getEditandoICo(true)
    try {
      Swal.fire({
        icon: "success",
        title: "Contrato Creado",
      });
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "No se pudo completar la accion",
      });
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
  const [editandoICo, getEditandoICo] = useState(true);

  return (
    <div>
      <form onSubmit={handleBeneficiario}>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
              Codigo:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Codigo"
              name="codigo"
              value={codigo}
              onChange={handleInputChange}
              disabled={active}
              pattern="^[a-zA-Z0-9 ]+$"
            />
            {error.Duracion && (
              <p className="font-weight-bold text-danger">{error.Duracion}</p>
            )}
          </div>
          <div className="form-group col-ld-6 col-md-12">
          <label className="font-weight-semibold" >
            Fecha:
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha"
            name="fecha"
            value={fecha}
            onChange={handleInputChange}
          
          />
           {error.fecha && (
            <p className="font-weight-bold text-danger">{error.fecha}</p>
          )}
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-ld-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
          Monto:
        </label>
        <input
          type="text"
          className="form-control"
          id="MontoNew"
          placeholder="Monto"
          name="monto"
          value={monto}
          onChange={handleInputChange}
          pattern="[0-9]{0,20}"
        />
        {error.monto && (
          <p className="font-weight-bold text-danger">{error.monto}</p>
        )}
          </div>

          <div className="form-group col-md-6">
            
          </div>
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
            {editandoICo ? (
              <button
                type="submit"
                className="btn btn-primary ml 5"
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

export default ImfoColocacion;
