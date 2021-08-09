import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { fetchSinToken,} from "../../../helpers/fetch";
import ClientesEdit from "../Admin/ClientesEdit/ClientesEdit";
import Beneficiario from "../Admin/Expediente/Beneficiario/Beneficiario";
import DatosBanco from "../Admin/Expediente/DatosBanco/DastosBanco"
import RegistrarBeneficiario from "../user/RegistrarBeneficiario"


const ClientInveted = ({id}) => {

    const [expediente, getExpediente] = useState({});
    const [loadingExp, setLoading] = useState(false);
    const [showBeneficiario, setshowBeneficiario] = useState(true);

    useEffect(() => {
        ObtenerExpediente();
        ObtenerBeneficiario();
      }, []);
    
      const ObtenerExpediente = async () => {
        try{
          const data = await fetchSinToken(`customers/${id}`);
          const datosCliente = await data.json();
          getExpediente(datosCliente.data);
          console.log(0, datosCliente)
          setLoading(true)
        }catch(e){
          Swal.fire({
            icon: "error",
            title: "No se pudieron Cargar los Datos",
          });
        }
      };

      const ObtenerBeneficiario = async () => { 
          const data = await fetchSinToken(`customer/${id}/beneficiary`);
          const datosBeneficiario = await data.json();
        
          if(datosBeneficiario.data[0] ===undefined) {
            setshowBeneficiario(true)
          } else {
            setshowBeneficiario(false)
          }

          console.log(datosBeneficiario.data[0])  
      };

    return (
        
        <div>
            {loadingExp ? 
           <div className="row ">
       <div className="col-md-8 mx-auto">
         <div className="card">
           <div className="card-body">
             <h2>Datos Personales</h2>
             {/*<ClientesEdit EditarCliente={expediente}/> */} 
                  
           </div>
         </div>

         <div className="card">
           <div className="card-body "> 
          <h2>Beneficiario</h2>  
          {showBeneficiario ? 
          <RegistrarBeneficiario id={id} /> 
           :
           <Beneficiario id={id} /> 
          }   
           </div>
         </div>  

         <div className="card">
           <div className="card-body "> 
          <h2>Datos Bancario</h2>     
         <DatosBanco id={id}/>
           </div>
         </div>      
       </div>
       </div>
       :
     
     <div className="container CentrarVertical">
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

export default ClientInveted;