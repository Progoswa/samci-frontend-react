import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchConToken, fetchSinToken } from "../../../helpers/fetch";
import Swal from "sweetalert2";
import "../usuarios.css";
import RegistrarUsuario from "./RegistrarUsuario/RegistrarUsuario";
import { Reset } from "../../../hooks/UsuariosOpciones";

var Listado;

const Usuarios = () => {
  //Obtener Lista del Api
  const [users, getUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ObtenerLista();
  }, []);

  const ObtenerLista = async () => {
    const data = await fetchConToken("users");
    const ListadoTotal = await data.json()
    Listado = ListadoTotal.data //ListadoTotal.data.filter(usuarios => usuarios.borrado === "0" );
    getUsers(Listado);
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
      name: "Nombre",
      selector: "nombres",
      sortable: true,
    },

    {
      name: "Apellido",
      selector: "apellidos",
      sortable: true,
    },

    {
      name: "Correo",
      selector: "email",
      sortable: true,
      grow: 2,
    },

    {
      name: "Telefono",
      selector: "telefono",
      sortable: true,
    },

    {
      name: "Opciones",
      
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
          <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
            <button
              onClick={() => Deshabilitar(row)}
              className="dropdown-item d-flex justify-content-between"
            >
              {row.habilitado === "0" ? (
                <>
                  <h6>Habilitar</h6> <i className="fas fa-user-plus  w-10"></i>
                </>
              ) : (
                <>
                  <h6>Deshabilitar</h6>{" "}
                  <i className="fas fa-user-slash w-10 "></i>
                </>
              )}
            </button>
            <button
              onClick={() => Reset(row)}
              className="dropdown-item d-flex justify-content-between"
            >
              <h6>Reset Password</h6>
              <i className="fas fa-unlock-alt w-10 "></i>
            </button>
            <button
              onClick={() => Borrar(row)}
              className="dropdown-item d-flex justify-content-between"
            >
              <h6>Eliminar</h6>
              <i className="fas fa-user-times w-10 "></i>
            </button>
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
      when: (row) => row.habilitado === "0",
      style: {
        backgroundColor: "#EBEDEF",
        textDecoration:"line-through"
      },
    },
  ];

  const customStyles = {
    cells: {
      style: {
        maxHeight: '500px',
      }, 
    },

    /*rdt_TableCell: {
      style: {
        backgroundColor: "red"
      }, 
    }*/
  }
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

    const search = Listado.filter((item) => {
      if (
        item.email.toLocaleLowerCase().includes(texto) ||
        item.id.toString().includes(texto)
      ) {
        return item;
      }
    });

    getUsers(search);
  };
  //

  //Opciones

  const  Deshabilitar = async ({id}) => {
    await fetchSinToken(`users/${id}/disable`, {}, "PUT");
    //const body = await resp.json();
    ObtenerLista();
  };

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
        const resp = await fetchSinToken(`users/${id}`, {}, "DELETE");
        const body = await resp.json();
        if (body.codigo === 200) {
          ObtenerLista();
          Swal.fire({
            title: "Usuario Eliminado",
            icon: "success",
          });
        }
      }
    });
  };
//
  return (
    <div className="main-content">
      <div className="page-header">
        <h2 className="header-title">Usuarios</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <a href="/" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Home
            </a>
            <span className="breadcrumb-item active">Usuarios</span>
          </nav>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#RegisterUser"
      >
        Registrar Usuario
      </button>
      <div className="input-group rounded mb-3 col-md-3 col-7 float-right ">
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
           <div className="card">
           <div className="card-body">
          <DataTable
            title="Usuarios"
            columns={columns}
            data={users}
            pagination
            paginationComponentOptions={PaginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="800px"
            noDataComponent={<span>No se encontro Ningun elemento </span>}
            conditionalRowStyles={conditionalRowStyles}
            customStyles={customStyles}
          />
          </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="mx-auto CentrarVertical">
                <img src="./assets/images/loading/Cargando.gif" alt="Logo" />
              </div>
            </div>
          </div>
        )}

        <RegistrarUsuario ObtenerLista={ObtenerLista} />
      </div>
    </div>
  );
};

export default Usuarios;

/*
Para cuando haya nombre y apellido
.hezdpS
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

 customStyles={customStyles}
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
            <button onClick={() => Deshabilitar(row)} className="dropdown-item d-flex justify-content-between"> 
            {row.id === 7 ? (<><h6>Habilitar</h6> <i className="fas fa-user-plus  w-10"></i></> )
            : 
            (<><h6>Deshabilitar</h6> <i className="fas fa-user-slash w-10 "></i></>) }
            </button>
            <button onClick={() => Reset(row)} className="dropdown-item d-flex justify-content-between">
        
              <h6>Reset Password</h6>
              <i className="fas fa-unlock-alt w-10 "></i>
             
            </button>
            <button onClick={() => Borrar(row)} className="dropdown-item d-flex justify-content-between">
            <h6 >Eliminar</h6>
              <i className="fas fa-user-times w-10 "></i>
            </button>
          </div>
        </div>

*/
