import React from 'react';
import '../../../App.css'

const DashboardInvited = () => {
    return (
        <div class="card rounded col-md-10 mx-auto">
        <div class="card-body d-flex flex-column rounded ">
        <img src="assets/images/logo/iconoInicio.jpeg" alt="icono" className='col-md-1 mx-auto rounded-circle iconoMobile'/>
        <br></br>
            <h1 className='text-center font-weight-bold'>Bienvenido a SAMCI</h1>
           <h4 className='text-center'>Te Invitamos a</h4>
             <p className='text-center'>
             Ver nuestro Simulador con las diferentes opciones de contratos que poseemos, una vez este seguro de su inversión, 
             por favor ingrese a la seccion de Registrar Datos, para completar su registro en nuestro Sistema. Una vez registrado
             le daremos indicaciones para que registre una colocacion alineada al contrato de preferencia. 
             </p>
             <br></br>
         
             
             <img src="assets/images/logo/logo_samci_web.png" alt="Samsi" className='col-md-4 mx-auto ' 
              style={{
                width:'25%',
               }}
             />
             
        </div>
    </div>
    );
};

export default DashboardInvited;

//<div class="d-flex align-content-around flex-wrap">...</div>