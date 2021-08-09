import React from "react";
import DashboardAdmin from "./DashboardAdmin";
import DashboardInvited from "./DashboardInvited/DashboardInvited";


const Dashboard = () => {

  const rol = localStorage.getItem('rol');
  return (
    <div className="main-content">
      {rol === '2' ?
       <DashboardInvited/> 
      :
       <DashboardAdmin/>
       }
    </div>
  );
};

export default Dashboard;

/*
Para Invitados

 <div class="card rounded">
    <div class="card-body d-flex flex-column">
    <img src="assets/images/logo/iconoInicio.jpeg" alt="icono" className='w-10 mx-auto rounded-circle'/>
    <br></br>
        <h1 className='text-center font-weight-bold'>Bienvenido a Samci</h1>
       <h3 className='text-center'>Te Invitamos a</h3>
       <h3 className='text-center'>
         Ver nuestro Simulador con las diferentes opciones de contratos que poseemos, una vez este seguro de su inversión, 
         por favor ingrese a la seccion de Registrar Datos, para completar su registro en nuestro Sistema. Una vez registrado
         le daremos indicaciones para que registre una colocacion alineada al contrato de preferencia. 
         </h3>
         <br></br>
     
         
         <img src="assets/images/logo/logo_samci_web.png" alt="Samsi" className='col-md-4 mx-auto ' />
         
    </div>
</div>

Por si me llega a servir
 
var contador = useState(0)

     if (contador ===1){
      document.getElementById("isFolded").classList.remove ("is-folded")
      contador=0
    } else {
      document.getElementById("isFolded").classList.add ("is-folded")
      contador=1
    }


    <div id="isFolded" className="app ">
        <div className="layout">
          <Header handleClick={handleClick} />

*/
