import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchSinToken,} from "../../../../helpers/fetch";
import ClientesEdit from "../ClientesEdit/ClientesEdit";
import Beneficiario from "./Beneficiario/Beneficiario"
import Colocacion from "./Colocacion/Colocacion";
import DatosBanco from "./DatosBanco/DastosBanco"
import ImfoColocacion from "./ImfoColocacion/ImfoColocacion";
import ImfoPago from "./ImfoPago/ImfoPago";
import TablaPago from "./ImfoPago/TablaPago";

const ClientesExpediente = () => {
  const { id } = useParams();
  //const id = 2
  const [expediente, getExpediente] = useState({});
  const [loadingExp, setLoading] = useState(false);

  useEffect(() => {
    ObtenerExpediente();
  }, []);

  const ObtenerExpediente = async () => {
    try{
      const data = await fetchSinToken(`customers/${id}`);
      const datosCliente = await data.json();
      getExpediente(datosCliente.data);
      setLoading(true)
    }catch(e){
      Swal.fire({
        icon: "error",
        title: "No se pudieron Cargar los Datos",
      });
    }
  };

  return (
    <div className="main-content">
      <div className="page-header">
        <h2 className="header-title">Clientes</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
          <Link to="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Home
              <i className="fas fa-chevron-right ml-1"></i>
            </Link>
            <Link to="/customers">
            <span className="breadcrumb-item active ml-1">Clientes</span>
            <i className="fas fa-chevron-right ml-1"></i>
            </Link>
            <span className="breadcrumb-item active ml-1">Expediente</span>
          </nav>
        </div>
      </div>
       {loadingExp ? 
       <div className="row ">
       <div className="col-md-6">
         <div className="card">
           <div className="card-body">
             <h2>Datos del Cliente</h2>
             
             <ClientesEdit EditarCliente={expediente}/>
           </div>
         </div>

         <div className="card">
           <div className="card-body"> 
           <h2>Beneficiario</h2>
             <Beneficiario id={id}/>
           </div>
         </div>

         <div className="card">
           <div className="card-body"> 
           <h2>Datos del Banco</h2>
             <DatosBanco id={id}/>
           </div>
         </div>
         
       </div>
       <div className=" col-md-6 ">

       <div className="card">
           <div className="card-body "> 
          <h2>Contrato</h2>     
         <Colocacion/>
           </div>
         </div>

         <div className="card">
           <div className="card-body"> 
          <h2>Datos de la Colocacion</h2>     
         <ImfoColocacion/>
           </div>
         </div>

         <div className="card">
           <div className="card-body">   
          <TablaPago/>
           </div>
         </div>
         <ImfoPago/>
       </div>
     </div> 
       : 
       <div className="container">
       <div className="row">
         <div className="mx-auto d-flex align-items-center min-vh-80">
           <img src="./assets/images/loading/Cargando.gif" alt="Logo" />
         </div>
       </div>
     </div>
     }

    </div>
  );
};

export default ClientesExpediente;
