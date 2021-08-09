import React, { useState, useEffect } from "react";
import { useForm } from "../../../../hooks/useForm";
import { fetchSinToken } from "../../../../helpers/fetch";
import ContracFormValidator from "./ContracFormValidator";
import Swal from "sweetalert2";

const NewContractForm = (props) => {
  //State para Registro
  const [Contrato, handleInputChange] = useForm({
    codigo:'',
    nombre:'',
    porcentaje:'',
    tipo:'',
    duracion:'10'
  });

  // Extrae de Usuario
  const { codigo, nombre , porcentaje, tipo, duracion} = Contrato;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);

  //Registro
  const handleRegister = (e) => {
    e.preventDefault();
    SetError(ContracFormValidator(Contrato));
    getDataIsCorrect(true);
  };

  const send = async () => {
    try {
    await fetchSinToken("contracts", Contrato, "POST");  
    document.getElementById("close-modal").click();
    props.ObtenerLista();
    Swal.fire({
      icon: "success",
      title: "Contrato Creado",
    });
    } catch (e) {
      Swal.fire({
        icon: "Error",
        title: "No se pudo completar la accion",
      });
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && DataIsCorrect) {
      send()
    }
  }, [error, DataIsCorrect]);

  return (
    <form onSubmit={handleRegister}>
      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Codigo:
        </label>
        <input
          type="text"
          className="form-control"
          id="codigo"
          placeholder="Codigo"
          name="codigo"
          value={codigo}
          onChange={handleInputChange}
         
        />
        {error.codigo && (
          <p className="font-weight-bold text-danger">{error.codigo}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
          pattern="[A-Za-z]{1,15}+$"
        />
        {error.nombre && (
          <p className="font-weight-bold text-danger">{error.nombre}</p>
        )}
      </div>
     
      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Porcentaje:
        </label>
        <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="porcentaje"
          placeholder="Porcentaje"
          name="porcentaje"
          value={porcentaje}
          onChange={handleInputChange}
          pattern="^[0-9,$]*"
        />
     
        <div className="input-group-append">
        <span className="input-group-text">%</span>
       </div>  
        </div>
        {error.porcentaje && (
          <p className="font-weight-bold text-danger">{error.porcentaje}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
        Tipo de Contrato:
        </label>
        <input
          type="text"
          className="form-control"
          id="tipo"
          placeholder="Tipo de Contrato"
          name="tipo"
          value={tipo}
          onChange={handleInputChange}
          pattern="[A-Za-z]{1,15}+$"
         
        />
        {error.tipo && (
          <p className="font-weight-bold text-danger">{error.tipo}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
        Duracion:
        </label>
        <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Duracion"
          name="duracion"
          value={duracion}
          onChange={handleInputChange}
          pattern="[0-9]{1,2}"
        />
     
        <div className="input-group-append">
        <span className="input-group-text">Meses</span>
       </div>  
        </div>
        {error.duracion && (
          <p className="font-weight-bold text-danger">{error.duracion}</p>
        )}
      </div>

      <div className="modal-footer">
        <button
          type="button"
          id="close-modal"
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

export default NewContractForm;


/* 
Por si llega hacer falta del tipo Select


      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="TipoContrato">
        Tipo de Contrato:
        </label>
        <select
          className="form-control"
          name="TipoContrato"
          id="TipoContrato"
          value={TipoContrato}
          onChange={handleInputChange}
        >
          <option value="Ba">Basico</option>
          <option value="Pm">Premiun</option>
        </select>
      </div>

*/