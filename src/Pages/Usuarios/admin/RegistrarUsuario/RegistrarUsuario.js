import React from "react";
import RegisterForm from "./RegisterForm";


const RegistrarUsuario = (props) => {
  return (
   
    <div
        className="modal fade "
        id="RegisterUser"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mt-0 row align-items-center min-vh-100" role="document">
          <div className="modal-content pt-3 pl-2 pr-2">
            <div className="modal-header ">
              <h5 className="modal-title" id="exampleModalLabel">
                Ingrese Los datos del Usuario
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
              
              <RegisterForm ObtenerLista={props.ObtenerLista}/>
              
              </div>
            
          </div>
        </div>
      </div>
   
  );
};

export default RegistrarUsuario;


