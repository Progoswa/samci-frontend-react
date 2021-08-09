import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { fetchSinToken } from "../../../helpers/fetch";
import Swal from 'sweetalert2'
//import ClientesEdit from "./ClientesEdit/ClientesEdit";


var Listado;

const ClientesAdmin = () => {

  //Obtener Lista del Api
  const [Clientes, getClientes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ObtenerLista();
  }, []);

  const ObtenerLista = async () => {
    const data = await fetchSinToken("customers");
    const ListadoTotal = await data.json(); 
    Listado = ListadoTotal.data.filter(usuarios => usuarios.borrado === "0" )
    getClientes(Listado);
    setLoading(true);
  };

  //Data Table
  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      grow: 0.5,
    },

    {
      name: "Numero de Identidad",
      selector: "numero_identidad",
      sortable: true,
      grow: 1.3,
    },

    {
      name: "País",
      selector: "pais",
      sortable: true,
    },

    {
      name: "Nombres",
      selector: "nombres",
      sortable: true,
      grow: 1,
    },

    {
      name: "Apellidos",
      selector: "apellidos",
      sortable: true,
    },

    {
      name: "Telefono",
      selector: "telefono",
      sortable: true,
    },

    {
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
            <button className="dropdown-item d-flex justify-content-between">
              <Link to={`/customers${row.id}`} ><h6>Consultar</h6></Link>
             <i className="far fa-address-book w-10"></i>
            </button>

            <button
              onClick={() => Borrar(row)}
              className="dropdown-item d-flex justify-content-between"
            >
              <h6>Eliminar</h6>
              <i className="fas fa-user-times w-10 "></i>
            </button>

            {/*<button
              onClick={() => Reset(row)}
              data-toggle="modal"
              data-target="#Editar"
              className="dropdown-item d-flex justify-content-between"
            >
              <h6>Editar</h6>
              <i className="fas fa-unlock-alt w-10 "></i>
            </button>*/}
          </div>
        </div>
      ),
    },
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

    
    getClientes(search);
  };
  //Opcciones
  const Borrar = ({ nombres, apellidos, id }) => {
    Swal.fire({
      title: `¿Esta seguro de eliminar a ${nombres} ${apellidos} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy Seguro",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await fetchSinToken(`customers/${id}`, {}, "DELETE");
        const body = await resp.json();
        if (body.codigo === 200) {
          ObtenerLista();
          Swal.fire({
            title: "Cliente Eliminado",
            icon: "success",
          });
        }
      }
    });
  };
// 

    return (
        <>
            <div className="input-group rounded mb-3 col-md-3 float-right ">
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
      <div className="table-responsive">
        {loading ? (
          <DataTable
            title="Clientes"
            columns={columns}
            data={Clientes}
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

export default ClientesAdmin;