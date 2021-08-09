import React, { useState, useEffect } from "react";
import ClientesEditValidator from "./ClientesEditValidator";
import Swal from "sweetalert2";
import { fetchSinToken } from "../../../../helpers/fetch";

const ClientesEdit = ({ EditarCliente }) => {
  useEffect(() => {
    if (EditarCliente.fecha_nacimiento === null) {
      getClienteEdit({
        IdentidadEdit: "CEDULA" ,
        NIdentidadEdit: EditarCliente.numero_identidad || '',
        Nacionalidad: EditarCliente.pais || '',
        Nombres: EditarCliente.nombres || '',
        Apellidos: EditarCliente.apellidos || '',
        Edad: "",
        FechaNacimiento: EditarCliente.fecha_nacimiento || '',
        ciudad: EditarCliente.ciudad || '',
        Direccion: EditarCliente.direccion || '',
        Telefono: EditarCliente.telefono || '',
        sexo: EditarCliente.sexo || '',
      });
    } else {
      calcularEdad();
    }
  }, [EditarCliente]);

  //State para Registro `${Editar.first_name}`
  const [ClienteEdit, getClienteEdit] = useState({
    IdentidadEdit: "CEDULA",
    NIdentidadEdit: "",
    Nacionalidad: "",
    Nombres: "",
    Apellidos: "",
    Edad: "",
    FechaNacimiento: "",
    ciudad: "",
    Direccion: "",
    Telefono: "",
    sexo: "MASCULINO",
  });

  //Onchange
  const handleInputChange = ({ target }) => {
    const esValido = target.validity.valid;
    if (esValido) {
      getClienteEdit({
        ...ClienteEdit,
        [target.name]: target.value,
      });
    }
  };

  // Extrae de Usuario
  const {
    IdentidadEdit,
    NIdentidadEdit,
    Nacionalidad,
    Nombres,
    Apellidos,
    FechaNacimiento,
    Edad,
    ciudad,
    Direccion,
    Telefono,
    sexo,
  } = ClienteEdit;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);

  //Registro
  const handleEdit = (e) => {
    e.preventDefault();
    SetError(ClientesEditValidator(ClienteEdit));
    getDataIsCorrect(true);
  };

  const send = async () => {
    getEditandoCl(false)
    try {
      const CambiosSend = {
        tipo: IdentidadEdit,
        numero: NIdentidadEdit,
        sexo: sexo,
        nombres: Nombres,
        apellidos: Apellidos,
        fecha: FechaNacimiento,
        pais: Nacionalidad,
        ciudad: ciudad,
        direccion: Direccion,
        telefono: Telefono,
      };
      const resp = await fetchSinToken(
        `customers/${EditarCliente.id}`,
        CambiosSend,
        "POST"
      );
      await resp.json();
      cambiarEdad(CambiosSend);
      Swal.fire({
        icon: "success",
        title: "Contrato Editado",
      });
      getEditandoCl(true)
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "No se pudieron Realizar los cambios",
      });
      getEditandoCl(true)
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

  //Edad
  const calcularEdad = () => {
    const Nacimiento = new Date(EditarCliente.fecha_nacimiento);
    const FechaActual = new Date();
    const agnios = FechaActual.getFullYear() - Nacimiento.getFullYear();
    getClienteEdit({
      IdentidadEdit: EditarCliente.tipo_identidad,
      NIdentidadEdit: EditarCliente.numero_identidad,
      Nacionalidad: EditarCliente.pais,
      Nombres: EditarCliente.nombres,
      Apellidos: EditarCliente.apellidos,
      Edad: agnios.toString(),
      FechaNacimiento: EditarCliente.fecha_nacimiento,
      ciudad: EditarCliente.ciudad,
      Direccion: EditarCliente.direccion,
      Telefono: EditarCliente.telefono,
      sexo: EditarCliente.sexo,
    });
  };

  const cambiarEdad = (CambiosSend) => {
    const Nacimiento = new Date(CambiosSend.fecha);
    const FechaActual = new Date();
    const agnios = FechaActual.getFullYear() - Nacimiento.getFullYear();
    getClienteEdit({
      ...ClienteEdit,
      Edad: agnios.toString(),
    })
  }
//Boton Enviar
const [editandoCl , getEditandoCl] = useState(true)
  return (
    <form onSubmit={handleEdit}>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="form-group col-lg-6 col-md-12">
        <label className="font-weight-semibold" htmlFor="userName">
        Tipo de Identidad:
        </label>
        <select className="form-control"
         name="IdentidadEdit" 
         id="IdentidadEdit" 
         value={IdentidadEdit} 
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
            id="NIdentidadEdit"
            placeholder="Numero de Identidad"
            name="NIdentidadEdit"
            value={NIdentidadEdit}
            onChange={handleInputChange}
            pattern="[0-9]{0,15}"
            disabled={active}
          />
          {error.NIdentidadEdit && (
            <p className="font-weight-bold text-danger">
              {error.NIdentidadEdit}
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
            id="Nombres"
            placeholder="Nombres"
            name="Nombres"
            value={Nombres}
            onChange={handleInputChange}
            pattern="[A-Za-z]{1,15}"
            disabled={active}
          />
          {error.Nombres && (
            <p className="font-weight-bold text-danger">{error.Nombres}</p>
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
            name="Apellidos"
            value={Apellidos}
            onChange={handleInputChange}
            pattern="[A-Za-z]{1,15}"
            disabled={active}
          />
          {error.Apellidos && (
            <p className="font-weight-bold text-danger">{error.Apellidos}</p>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Fecha de Nacimiento:
          </label>
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de Nacimiento"
            name="FechaNacimiento"
            value={FechaNacimiento}
            onChange={handleInputChange}
            disabled={active}
          />
           {error.FechaNacimiento && (
            <p className="font-weight-bold text-danger">{error.FechaNacimiento}</p>
          )}
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label className="font-weight-semibold" htmlFor="userName">
            Edad:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Edad"
            name="Edad"
            value={Edad}
            onChange={handleInputChange}
            disabled
          />
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
            name="Nacionalidad"
            value={Nacionalidad}
            onChange={handleInputChange}
            pattern="[A-Za-z]{1,15}"
            disabled={active}
          />
          {error.Nacionalidad && (
            <p className="font-weight-bold text-danger">{error.Nacionalidad}</p>
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
            name="Direccion"
            value={Direccion}
            onChange={handleInputChange}
            pattern="^[a-zA-Z ]+$"
            disabled={active}
          />
          {error.Direccion && (
            <p className="font-weight-bold text-danger">{error.Direccion}</p>
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
            name="Telefono"
            value={Telefono}
            onChange={handleInputChange}
            pattern="[+0-9]{0,15}"
            disabled={active}
          />
          {error.Telefono && (
            <p className="font-weight-bold text-danger">{error.Telefono}</p>
          )}
        </div>
      </div>

      <div className="form-group col-md-12">
        <label className="font-weight-semibold">Sexo</label>
        <div className="d-flex">
          <div className="radio">
            <input
              type="radio"
              name="sexo"
              id="ExpgridRadios1"
              value="MASCULINO"
              checked={sexo === "MASCULINO"}
              onChange={handleInputChange}
              disabled={active}
            />
            <label htmlFor="ExpgridRadios1">Masculino</label>
          </div>
          <div className="radio ml-2">
            <input
              type="radio"
              name="sexo"
              id="ExpgridRadios2"
              value="FEMENINO"
              checked={sexo === "FEMENINO"}
              onChange={handleInputChange}
              disabled={active}
            />
            <label htmlFor="ExpgridRadios2">Femenino</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 "></div>
        <div className="col-md-6 d-flex justify-content-end">
          <button type="button" className="btn btn-secondary mr-3" onClick={Editar}>
            {active ? (
              <i className="fas fa-unlock"></i>
            ) : (
              <i className="fas fa-lock"></i>
            )}
          </button>
          {editandoCl ? (
             <button
             type="submit"
             className="btn btn-primary ml 5"
             disabled={active}
           >
             Guardar Cambios
           </button>
          ) : (
            <button  className="btn font-weight-bold boton">
              Guardando...
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ClientesEdit;
