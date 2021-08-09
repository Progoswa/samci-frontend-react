import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../../../../hooks/useForm";
import ColocacionValidator from "./ColocacionValidator";

const Colocacion = () => {
  //State para Registro
  const [Colocacion, handleInputChange] = useForm({
    id: '1',
    codigo:'',
    nombre:'',
    tipo:'',
    Interes:'',
    duracion:''
   
  });

  // Extrae de Usuario
  const {
    //id,
    codigo,
    nombre,
    tipo,
    Interes,
    duracion
  } = Colocacion;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);
  //Registro
  const handleBeneficiario = (e) => {
    e.preventDefault();
    SetError(ColocacionValidator(Colocacion));
    getDataIsCorrect(true);
  };

  const send = async () => {
    console.log(Colocacion);
    getEditandoCo(false);
    getEditandoCo(true);
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
  const [editandoCo, getEditandoCo] = useState(true);

  return (
   
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
            {error.codigo && (
              <p className="font-weight-bold text-danger">{error.nombre}</p>
            )}
          </div>

          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="nombre"
              value={nombre}
              onChange={handleInputChange}
              disabled={active}
              pattern="^[a-zA-Z ]+$"
            />
            {error.nombre && (
              <p className="font-weight-bold text-danger">{error.nombre}</p>
            )}
          </div>

        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
              Tipo:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="tipo"
              name="tipo"
              value={tipo}
              onChange={handleInputChange}
              pattern="^[a-zA-Z0-9 ]+$"
              disabled={active}
            />
            {error.tipo && (
              <p className="font-weight-bold text-danger">
                {error.tipo}
              </p>
            )}
          </div>

          <div className="form-group col-ld-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Interes:
            </label>
            <div className='input-group mb-3'>
            <input
              type="text"
              className="form-control"
              placeholder="Interes"
              name="Interes"
              value={Interes}
              onChange={handleInputChange}
              pattern="^[0-9]{0,3}"
              disabled={active}
            />
            <div className="input-group-append">
            <span className="input-group-text">%</span>
            </div>
            </div>
            {error.Interes && (
              <p className="font-weight-bold text-danger">
                {error.Interes}
              </p>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-ld-6 col-md-12">
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
              pattern="^[a-zA-Z0-9 ]+$"
              disabled={active}
            />
            {error.duracion && (
              <p className="font-weight-bold text-danger">
                {error.duracion}
              </p>
            )}
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
            {editandoCo ? (
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
   
  );
};

export default Colocacion;


/*

   <div className="form-group col-md-6">
            <label className="font-weight-semibold" htmlFor="userName">
              Fecha de Inicio:
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Fecha de Inicio"
              name="Fecha"
              value={Fecha}
              onChange={handleInputChange}
              disabled={active}
            />
          </div>


*/