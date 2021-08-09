import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchTest } from "../../../../../helpers/fetch";
import { Borrar } from "../../../../../hooks/ContratoOpciones";
//import NewPago from "./NewPago/NewPago";
//import PagoEdit from "./PagoEdit.js/PagoEdit";

var Listado;

const TablaPago = () => {

 //Obtener Lista del Api
 const [Pagos, getPagos] = useState([]);
 const [loading, setLoading] = useState(false);

 useEffect(() => {
   ObtenerLista();
 }, []);

 const ObtenerLista = async () => {
   const data = await fetchTest("users?page=2");
   Listado = await data.json();
   //getPagos(Listado.data);
   setLoading(true);
 };

 //Data Table
 const columns = [
  
   {
     name: "Cliente",
     selector: "",
     sortable: true,
   },

   {
     name: "Monto",
     selector: "",
     sortable: true,
   },

   {
     name: "id-Operacion",
     selector: "",
     sortable: true,
   },

   {
     name: "Comprobante",
     selector: "",
     sortable: true,
    
   },

   /*{
     name: "Opciones",
     allowOverflow: true,
     cell: (row) => (
       <div className="dropdown">
         <button
           className="btn rounded-circle mt-1 mb-1"
           type="button"
           id="dropdownMenuButton"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
         >
           <i className="fas fa-ellipsis-v"></i>
         </button>
         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          
           <button
             onClick={() => Borrar(row)}
             className="dropdown-item d-flex justify-content-between"
           >
             <h6>Eliminar</h6>
             <i className="fas fa-user-times w-10 "></i>
           </button>

           <button
             onClick={() => EditarPago(row)}
             data-toggle="modal"
             data-target="#PagoEdit"
             className="dropdown-item d-flex justify-content-between"
           >
             <h6>Editar</h6>
             <i className="fas fa-unlock-alt w-10 "></i>
           </button>
         </div>
       </div>
     ),
   },*/
 ];

 const PaginacionOpciones = {
   rowsPerPageText: "Filas por Pagina",
   rangeSeparatorText: "de",
   selectAllRowsItem: true,
   selectAllRowsItemText: "todos",
 };

 const conditionalRowStyles = [
   {
     when: (row) => row.id === 100,
     style: {
       backgroundColor: "#EBEDEF",
     },
   },
 ];

 //Buscador

 const SinTildes = (word) => {
  let letra = word.replace(/í/g, "i");
  letra = letra.replace(/á/g, "a");
  letra = letra.replace(/é/g, "e");
  letra = letra.replace(/ó/g, "o");
  letra = letra.replace(/ú/g, "u");
  return letra;
};

const handleBuscador = (e) => {
  const texto = SinTildes(e.target.value.toLowerCase());
  const search = Listado.data.filter((item) => {
    if (
      item.first_name
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(texto) ||
      item.last_name
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(texto) ||
      item.id.toString().includes(texto)
    ) {
      return item;
    }
  });

  getPagos(search);
};
//

 //Editar
 const [Editar, getEditar]= useState({})
 const EditarPago = (row) => {
   getEditar(row); 
 }

  return (
    <>
    <h2>Información del Pago</h2>   
    <div className="input-group rounded mb-3 col-md-12 ">
       
        <button
          type="button"
          className="btn btn-primary col-md-4 "
          data-toggle="modal"
          data-target="#PagoExpediente"
        >
          Nuevo Pago
        </button>
        
        <div className="input-affix col-md-8">
        <div className="input-affix">
          <i className="prefix-icon anticon anticon-search"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            name="buscar"
            onChange={handleBuscador}
          />
        </div>
         </div>
      </div>
      <div className="table-responsive">
        {loading ? (
          <DataTable
            title="Pagos"
            columns={columns}
            data={Pagos}
            pagination
            paginationComponentOptions={PaginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            noDataComponent={<span>No se encontro Ningun elemento </span>}
            conditionalRowStyles={conditionalRowStyles}
            dense
          />
        ) : (
          <div className="container">
            <div className="row">
              <div className="mx-auto CentrarVertical">
                <img src="./assets/images/loading/Cargando.gif" alt="Logo" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      </>
  );
};

export default TablaPago;