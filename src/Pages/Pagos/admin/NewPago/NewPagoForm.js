import React, { useState, useEffect } from "react";
import { useForm } from "../../../../hooks/useForm";
import NewPagoValidator from "./NewPagoValidator";
import Swal from "sweetalert2";

const NewPagoForm = (props) => {
  //State para Registro
  const [ PagoNew, handleInputChange] = useForm({
   metodo:'',
   fecha_operacion:'',
   codigo_confirmacion:'',
   monto:'',
  });

  // Extrae de Usuario
  const { metodo, fecha_operacion, codigo_confirmacion, monto } = PagoNew;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);

  //Registro
  const handleRegister = (e) => {
    e.preventDefault();
    SetError(NewPagoValidator(PagoNew));
    getDataIsCorrect(true);
  };

  const send = () => {
    console.log(PagoNew);
    document.getElementById("close-modal5").click();
    props.ObtenerLista();
    Swal.fire({
      icon: "success",
      title: "Pago Registrado",
    });
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && DataIsCorrect) {
      send();
    }
  }, [error, DataIsCorrect]);

  return (
    <form onSubmit={handleRegister}>
      <div className="form-group">
        <label className="font-weight-semibold" >
        Metodo:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=" Metodo"
          name="metodo"
          value={metodo}
          onChange={handleInputChange}
          pattern="[A-Za-z ]{1,15}"
        />
        {error.metodo && (
          <p className="font-weight-bold text-danger">{error.metodo}</p>
        )}
      </div>

      <div className="form-group">
      <label className="font-weight-semibold" >
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
            <p className="font-weight-bold text-danger">{error.fecha_operacion}</p>
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
          <p className="font-weight-bold text-danger">{error.codigo_confirmacion}</p>
        )}
      </div>

      <div className="form-group">
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

      <div className="modal-footer">
        <button
          type="button"
          id="close-modal5"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Cerrar
        </button>
        <button type="submit" className="btn btn-primary" data-toggle="modal">
          Crear Contato
        </button>
      </div>
    </form>
  );
};

export default NewPagoForm;
