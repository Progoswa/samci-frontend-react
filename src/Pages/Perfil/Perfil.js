import React from "react";
//Components
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import CambioClave from "./CambioClave/CambioClave";
import ImfoUserLeft from "./ImfoUser/ImfoUserLeft";
import ImfoUserRight from "./ImfoUser/ImfoUserRight";

const Perfil = () => {

 const rol = localStorage.getItem('rol')

  return (
    <>
      <div className="main-content">
        <BreadCrumb />
        
          <div className="card mt-4 col-md-10 mx-auto">
            <div className="card-body">
              <div className="row align-items-center justify-content-center">
                <ImfoUserLeft />

                <ImfoUserRight />
              </div>
            </div>
          </div>
      

        {rol !== '2' && 
        <div className="card col-md-10 mx-auto">
            <div className="row ">
              <div className="col-md-5 mt-5">
               
                  <h1 className="text-center mt-3">Cambio de Contraseña</h1>
                  <br></br>
                  <h5 className="text-justify ml-4">
                    Recuerde que para el Cambio de su Contraseña debe considerar
                    los siguientes aspectos:
                  </h5>
                  <br></br>
                  <ul className="ml-5">
                    <li ><h5>Debe Contener Letras y Números</h5></li>
                    <li ><h5>Debe Contener Caracteres especiales</h5></li>
                    <li ><h5>Debe ser de mas de 8 Caracteres</h5></li>
                  </ul>
               
              </div>
              <div className="col-md-7 ">
                <div className=" justify-content-center px-5 mt-5">
                  <br></br>
                  <CambioClave />
                </div>
              </div>
            </div>
       
        </div>}
      </div>
    </>
  );
};

export default Perfil;
