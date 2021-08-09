import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../../../../hooks/useForm";
import ImfoPagoValidator from "./ImfoPagoValidator";

const ImfoPago = () => {
  //State para Registro
  const [PagoImfo, handleInputChange] = useForm({
    metodoPago: "",
    FechaOperacion: "",
    Codigo: "", 
    TitularCuenta: "",
    Banco: "",
  });

  // Extrae de Usuario
  const { metodoPago, FechaOperacion,  Codigo, TitularCuenta , Banco  } =
     PagoImfo ;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);
  //Registro
  const handleBeneficiario = (e) => {
    e.preventDefault();
    console.log(PagoImfo);
    SetError(ImfoPagoValidator(PagoImfo));
    getDataIsCorrect(true);
  };

  const send = async () => {
    console.log(PagoImfo);
    getEditandoIpa(false)
    getEditandoIpa(true)
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
   const [editandoIpa, getEditandoIpa] = useState(true);

  return (

    <div
    className="modal fade "
    id="PagoExpediente"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      className="modal-dialog mt-0 row align-items-center min-vh-100"
      role="document"
    >
      <div className="modal-content pt-3 pl-2 pr-2">
        <div className="modal-header ">
          <h5 className="modal-title" id="exampleModalLabel">
            Ingrese Nuevo Pago
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form onSubmit={handleBeneficiario}>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Método de Pago:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Método de Pago"
              name="metodoPago"
              value={metodoPago}
              onChange={handleInputChange}
              disabled={active}
              pattern="^[a-zA-Z ]+$"
            />
            {error.metodoPago && (
              <p className="font-weight-bold text-danger">{error.metodoPago}</p>
            )}
          </div>
          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Fecha de la operación:
            </label>
            <input
              type="date"
              className="form-control"
              name="FechaOperacion"
              value={FechaOperacion}
              onChange={handleInputChange}
              disabled={active}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Código de confirmación:
            </label>        
              <input
                type="text"
                className="form-control"
                placeholder="Código de confirmación"
                name="Codigo"
                value={Codigo}
                onChange={handleInputChange}
                pattern="^[a-zA-Z0-9]+$"
                disabled={active}
              />
            {error.Codigo && (
              <p className="font-weight-bold text-danger">{error.Codigo}</p>
            )}
          </div>
          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Titular de la Cuenta:
            </label>        
              <input
                type="text"
                className="form-control"
                placeholder="Titular de la Cuenta"
                name="TitularCuenta"
                value={TitularCuenta}
                onChange={handleInputChange}
                pattern="^[a-zA-Z0-9 ]+$"
                disabled={active}
              />
            {error.TitularCuenta && (
              <p className="font-weight-bold text-danger">{error.TitularCuenta}</p>
            )}
          </div>
        </div>
        <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Banco:
            </label>        
              <input
                type="text"
                className="form-control"
                placeholder="Banco"
                name="Banco"
                value={Banco}
                onChange={handleInputChange}
                pattern="^[a-zA-Z ]+$"
                disabled={active}
              />
            {error.Banco && (
              <p className="font-weight-bold text-danger">{error.Banco}</p>
            )}
          </div> 
          <div className="row">
          {/*<div className="col-md-6 "></div>*/}
          <div className="col-md-12 d-flex justify-content-center">
            {/*<button
              type="button"
              className="btn btn-secondary mr-3 "
              onClick={Editar}
            >
              {active ? (
                <i className="fas fa-unlock"></i>
              ) : (
                <i className="fas fa-lock"></i>
              )}
            </button>*/}
            <button
          type="button"
          id="PagoExpediente"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Cerrar
        </button>
            {editandoIpa ? (
              <button
                type="submit"
                className="btn btn-primary ml-3"
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
      </div>
    </div>
  </div>
  );
};

export default ImfoPago;
