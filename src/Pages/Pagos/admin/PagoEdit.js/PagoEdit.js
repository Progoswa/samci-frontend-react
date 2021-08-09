import React, { useState, useEffect } from "react";
import PagoEditValid from "./PagoEditValid";
import Swal from "sweetalert2";

const PagoEdit = ({ Editar, ObtenerLista }) => {
  useEffect(() => {
    getPagoEdit({
      ...PagoEdit,
      metodo: Editar.first_name,
      monto: Editar.id,
    });
  }, [Editar]);

  //State para Registro `${Editar.first_name}`
  const [PagoEdit, getPagoEdit] = useState({
    metodo: "",
    fecha_operacion: "",
    codigo_confirmacion: "",
    monto: "",
  });

  //Onchange
  const handleInputChange = ({ target }) => {
    const esValido = target.validity.valid;
    if (esValido) {
      getPagoEdit({
        ...PagoEdit,
        [target.name]: target.value,
      });
    }
  };

  // Extrae de Usuario
  const { metodo, fecha_operacion, codigo_confirmacion, monto } = PagoEdit;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);

  //Registro
  const handleEdit = (e) => {
    e.preventDefault();
    SetError(PagoEditValid(PagoEdit));
    getDataIsCorrect(true);
  };

  const send = () => {
    console.log(PagoEdit);
    console.log(Editar.id);
    document.getElementById("close-modal4").click();
    ObtenerLista();
    Swal.fire({
      icon: "success",
      title: "Pago Editado",
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && DataIsCorrect) {
      send();
    }
  }, [error, DataIsCorrect]);

  return (
    <div
      className="modal fade "
      id="PagoEdit"
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
              Editar Pago
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
            <form onSubmit={handleEdit}>
              <div className="form-group">
                <label className="font-weight-semibold" htmlFor="userName">
                  Metodo:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Metodo"
                  name="metodo"
                  value={metodo}
                  onChange={handleInputChange}
                  pattern="[A-Za-z]{1,15}"
                />
                {error.metodo && (
                  <p className="font-weight-bold text-danger">{error.metodo}</p>
                )}
              </div>

              <div className="form-group">
                <label className="font-weight-semibold">
                  Fecha de Operacion:
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Fecha de Operacion"
                  name="fecha_operacion"
                  value={fecha_operacion}
                  onChange={handleInputChange}
                />
                {error.fecha_operacion && (
                  <p className="font-weight-bold text-danger">
                    {error.fecha_operacion}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label className="font-weight-semibold" htmlFor="userName">
                  Codigo de confirmacion:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Codigo de confirmacion"
                  name="codigo_confirmacion"
                  value={codigo_confirmacion}
                  onChange={handleInputChange}
                  pattern="[A-Za-z0-9- ]{0,50}"
                />
                {error.codigo_confirmacion && (
                  <p className="font-weight-bold text-danger">
                    {error.codigo_confirmacion}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label className="font-weight-semibold" htmlFor="userName">
                  Monto:
                </label>
                <input
                  type="text"
                  className="form-control"
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

              <div className="modal-footer">
                <button
                  type="button"
                  id="close-modal4"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-toggle="modal"
                >
                  Crear Contato
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagoEdit;
