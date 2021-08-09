import React, { useState } from 'react';
import Monto from './Monto';

const Card = ({item}) => {

  const [contrato, getContrato] = useState(0)
  const [MontoIngresado, getMonto] = useState(0)

    const Seleccionado = (contract) => {
      
        localStorage.setItem('idContract', contract.id)
        const contratoElegido = localStorage.getItem('idContract')
        getContrato(contratoElegido)
    }

    
    
    return (
        <>
        <div className="card w-50 mr-3 ml-3 w80Mobile mx-auto">   
        <img  src="assets/images/others/SimuladorImg.jpg" alt="Contratos"
        style={{
          height:'200px'
         }}
        />
          <div className="card-body">
           { /*<h4 className="m-t-10">Ingrese Monto a Invertir</h4>*/}
            <Monto />
           { /*<div className="m-t-20">
              <button type="button" onClick={() => Seleccionado(item)} className="btn btn-primary">
                Continuar
              </button>
        </div>*/}
          </div>
        </div>

      {/*MODAL
    <div className="modal fade" id="IngreseMonto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title w-100 text-center" id="exampleModalLongTitle">Ingrese Monto a Invertir</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <Monto contrato={contrato} getMonto={getMonto}/>
      </div>
    
    </div>
  </div>
</div>
*/}

        </>
    );
};

export default Card;