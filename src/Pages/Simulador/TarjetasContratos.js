import React, { useEffect, useState } from "react";
import { fetchSinToken } from "../../helpers/fetch";
import Card from "./Components/Card";

const TarjetasContratos = () => {

  //Obtener Lista del Api
  const [Contract, getContract] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [status, setstatus] = useState(false);

  useEffect(() => {
    ObtenerContratos();
  }, []);

  const ObtenerContratos = async () => {
    const data = await fetchSinToken("contracts");
    const ListadoTotal = await data.json();
    var Listado = ListadoTotal.data.filter(
      (contratos) => contratos.borrado === "0"
    );
    var ListadoStatus = Listado.filter(
        (contratos) => contratos. status === "1"
      );
     
    getContract(ListadoStatus);
    setLoading(true);
  };

  return (
    <>
    <div className='w-90 mx-auto d-flex flex-row flex-wrap' >
        
             <Card
            
             />        
        
    </div>
   
    </>
  );
};

export default TarjetasContratos;

/*
style="max-width: 370px"
*/
