import React from 'react';

const ConsultarClientes = ({ClientesExpe}) => {
    console.log(ClientesExpe)
    return (
        <div
      className="modal fade "
      id="Consulta"
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
            <h1 className="modal-title text-center w-100" id="exampleModalLabel">
            {ClientesExpe.first_name} {ClientesExpe.last_name} 
            </h1>
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
          <img src={ClientesExpe.avatar} alt="avatar" />
            <h5> {ClientesExpe.id}</h5>
            <h5> {ClientesExpe.first_name}</h5>
            <h5> {ClientesExpe.last_name}</h5>
            <h5> {ClientesExpe.email}</h5>
          </div>
          <div className="modal-footer">
        <button type="button" className="btn btn-secondary w-50 mx-auto" data-dismiss="modal">Cerrar</button>
      </div>
        </div>
      </div>
    </div>
    );
};

export default ConsultarClientes;