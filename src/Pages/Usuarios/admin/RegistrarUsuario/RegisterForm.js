import React, { useState, useEffect } from "react";
import { useForm } from "../../../../hooks/useForm";
import RegisterValidator from "./RegisterValidator";
import { fetchSinToken } from "../../../../helpers/fetch";
import Swal from "sweetalert2";


const RegisterForm = (props) => {
  //State para Registro
  const [Usuario, handleInputChange] = useForm({
    Nombres: "",
    Apellidos: "",
    email: "",
    Telefono: "",
    sexo: "MASCULINO",
  });

  // Extrae de Usuario
  const { Nombres, Apellidos, email, Telefono, sexo } = Usuario;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);
  
  //Registro
  const handleRegister = (e) => {
    e.preventDefault();
    SetError(RegisterValidator(Usuario));
   
    getDataIsCorrect(true);
  };

  const send = async () => {
    const UsuarioSend = {
      "nombres": Nombres,
      "apellidos": Apellidos,
      "email": email,
      "telefono": Telefono,
      "sexo": sexo
    }
    try{
      const resp = await fetchSinToken("users", UsuarioSend, "POST");
      /*const body =*/ await resp.json();
      //console.log(body)
      document.getElementById("close-modal").click();
      props.ObtenerLista()
      Swal.fire({
        icon: "success",
        title: "Usuario Creado",
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

  return (
    <form onSubmit={handleRegister}>
      <div className="form-group">
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
        />
        {error.Nombres && (
          <p className="font-weight-bold text-danger">{error.Nombres}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Apellidos:
        </label>
        <input
          type="text"
          className="form-control"
          id="Apellidos"
          placeholder="Apellidos"
          name="Apellidos"
          value={Apellidos}
          onChange={handleInputChange}
          pattern="[A-Za-z]{1,15}"
        />
        {error.Apellidos && (
          <p className="font-weight-bold text-danger">{error.Apellidos}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="email">
          Correo:
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Correo"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {error.email && (
          <p className="font-weight-bold text-danger">{error.email}</p>
        )}
      </div>

      <div className="form-group">
        <label className="font-weight-semibold" htmlFor="userName">
          Telefono:
        </label>
        <input
          type="text"
          className="form-control"
          id="Telefono"
          placeholder="Telefono"
          name="Telefono"
          value={Telefono}
          onChange={handleInputChange}
          pattern="[0-9]{0,15}"
        />
        {error.Telefono && (
          <p className="font-weight-bold text-danger">{error.Telefono}</p>
        )}
      </div>

      <div className="form-group col-md-12">   
              <label className="font-weight-semibold">Sexo</label>
              <div className="d-flex">
                <div className="radio">
                  <input
                    type="radio"
                    name="sexo"
                    id="RgridRadios1"
                    value="MASCULINO"
                    checked={sexo==="MASCULINO"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="RgridRadios1">Masculino</label>
                </div>
                <div className="radio ml-2">
                  <input
                    type="radio"
                    name="sexo"
                    id="RgridRadios2"
                    value="FEMENINO"
                    checked={sexo==="FEMENINO"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="RgridRadios2">Femenino</label>
                </div>
              </div>
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
        <button
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#Register"
        >
          Crear Usuario
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;


