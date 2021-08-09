import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {fetchSinToken} from '../../../../helpers/fetch'
import ContractEditValid from "./ContractEditValid";

const ContractEdit = ({Editar, ObtenerLista}) => {

    useEffect(() => {
        getContratoEdit({
          codigo:Editar.codigo,
          nombre:Editar.nombre,
          porcentaje:Editar.tasa_interes,
          tipo:Editar.tipo,
          status:Editar.status,
          duracion:Editar.duracion
        })
      }, [Editar]);   

//State para Registro `${Editar.first_name}`
  const [ContratoEdit, getContratoEdit] = useState({
    codigo:'',
    nombre:'',
    porcentaje:'',
    tipo:'',
    status:'0',
    duracion:''
  });

//Onchange
const handleInputChange = ({target}) => {
    const esValido = target.validity.valid;
    if (esValido) {

        getContratoEdit ({
            ...ContratoEdit ,
            [target.name] : target.value
        });
    }  
   }  

  // Extrae de Usuario
  const { codigo, nombre, porcentaje, tipo, status, duracion } = ContratoEdit;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);

  //Registro
  const handleEdit = (e) => {
    e.preventDefault();
    SetError(ContractEditValid(ContratoEdit));
    getDataIsCorrect(true);
  };

  const send = async () => {
    const resp = await fetchSinToken(`contracts/${Editar.id}`,ContratoEdit, "POST");
    await resp.json();
    document.getElementById("close-modal-Contract").click();
    ObtenerLista();
    Swal.fire({
      icon: "success",
      title: "Contrato Editado",
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
      id="Editar"
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
              Editar Contrato
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
          Codigo:
        </label>
        <input
          type="text"
          className="form-control"
          id="codigoEdit"
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
          id="nombreEdit"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
          pattern="^[a-zA-Z ]+$"
        />
        {error.nombre && (
          <p className="font-weight-bold text-danger">{error.nombre}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Porcentaje:
        </label>
        <input
          type="text"
          className="form-control"
          id="porcentajeEdit"
          placeholder="Porcentaje"
          name="porcentaje"
          value={porcentaje}
          onChange={handleInputChange}
          pattern="^[0-9.,$]*"
        />
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
          id="tipoEdit"
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
        <input
          type="text"
          className="form-control"
          placeholder="Duracion"
          name="duracion"
          value={duracion}
          onChange={handleInputChange}
          pattern="[0-9]{1,2}"
        />
        {error.duracion && (
          <p className="font-weight-bold text-danger">{error.duracion}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
        Estado:
        </label>
        <select className="form-control"
         name="status" 
         id="status" 
         value={status} 
         onChange={handleInputChange}
         >
        <option value="1">Habilitado</option>
        <option value="0">Desabilitado</option>
    </select>
        {error.tipo && (
          <p className="font-weight-bold text-danger">{error.tipo}</p>
        )}
      </div>

      <div className="modal-footer">
        <button
          type="button"
          id="close-modal-Contract"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Cerrar
        </button>
        <button type="submit" className="btn btn-primary" data-toggle="modal">
          Editar Contrato
        </button>
      </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractEdit;
  

// ^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$ para porcentaje