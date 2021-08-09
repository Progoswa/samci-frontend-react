import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchSinToken } from "../../../helpers/fetch";
import Swal from "sweetalert2";
import ContractEdit from "./ContractEdit/ContractEdit";
import NewContract from "./NewContract/NewContract";
import '../../../App.css'
//import '../../Usuarios/usuarios.css'

var Listado;

const ContratosAdmin = () => {
  //Obtener Lista del Api
  const [Contract, getContract] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [status, setstatus] = useState(false);

  useEffect(() => {
    ObtenerLista();
  }, []);

  const ObtenerLista = async () => {
    const data = await fetchSinToken("contracts");
    const ListadoTotal = await data.json();
    Listado = ListadoTotal.data.filter(
      (contratos) => contratos.borrado === "0"
    );
    getContract(Listado);
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
      name: "Codigo",
      selector: "codigo",
      sortable: true,
      grow: 1.5,
    },

    {
      name: "Nombre",
      selector: "nombre",
      sortable: true,
      grow: 1.5,
    },

    {
      name: "Porcentaje",
      selector: "tasa_interes",
      sortable: true,
    },

    {
      name: "Tipo de Contrato",
      selector: "tipo",
      sortable: true,
      grow: 1.5,
    },

    {
      name: "Estado",
      center:true,
      allowOverflow: true,
      cell: (row) => (
        <>
          {row.status === "1" ? (
            <div>
              <h4>
                <span
                  className="badge badge-pill badge-success text-center mx-auto green"
                  style={{ width: "110px" }}
                >
                  Habilitado
                </span>
              </h4>
            </div>
          ) : (
            <h4>
              <span
                className="badge badge-pill badge-danger text-center mx-auto red"
                style={{ width: "110px" }}
              >
                Desabilitado
              </span>
            </h4>
          )}
        </>
      ),
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
            <button
              onClick={() => Deshabilitar(row)}
              className="dropdown-item d-flex justify-content-between"
            >
              {row.status === '0' ? (
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
              onClick={() => Borrar(row)}
              className="dropdown-item d-flex justify-content-between"
            >
              <h6>Eliminar</h6>
              <i className="fas fa-user-times w-10 "></i>
            </button>

            <button
              onClick={() => Reset(row)}
              data-toggle="modal"
              data-target="#Editar"
              className="dropdown-item d-flex justify-content-between"
            >
              <h6>Editar</h6>
              <i className="fas fa-unlock-alt w-10 "></i>
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
        textDecoration: "line-through",
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
    const search = Listado.filter((item) => {
      if (
        item.nombre
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(texto) ||
        item.tipo
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(texto) ||
        item.codigo_especial
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(texto) ||
        item.porcentaje
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(texto) ||
        item.id.toString().includes(texto)
      ) {
        return item;
      }
    });

    getContract(search);
  };
  //

  //Editar
  const [Editar, getEditar] = useState({});
  const Reset = (row) => {
    getEditar(row);
  };
  //Opciones

  const Deshabilitar = async ({ codigo_especial, nombre, porcentaje, tipo, status, id }) => {
    if(status === '1') {
      var cambiar = {
        codigo:codigo_especial,
          nombre:nombre,
          porcentaje:porcentaje,
          tipo:tipo,
          status:'0'
      }
    } else {
       cambiar = {
        codigo:codigo_especial,
          nombre:nombre,
          porcentaje:porcentaje,
          tipo:tipo,
          status:'1'
      }
    }
    await fetchSinToken(`contracts/${id}`,cambiar, "POST");
    ObtenerLista();
  };

  const Borrar = ({ nombre, id }) => {
    Swal.fire({
      title: `¿Esta seguro de eliminar a ${nombre} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy Seguro",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await fetchSinToken(`contracts/${id}`, {}, "DELETE");
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
    <>
      <div className="input-group rounded mb-3 col-md-3 col-7 float-right d-flex justify-content-end ">
        <div className="input-affix ">
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
                title="Contratos"
                columns={columns}
                data={Contract}
                pagination
                paginationComponentOptions={PaginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                noDataComponent={<span>No se encontro Ningun elemento </span>}
                conditionalRowStyles={conditionalRowStyles}
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
      </div>
      <NewContract ObtenerLista={ObtenerLista} />
      <ContractEdit Editar={Editar} ObtenerLista={ObtenerLista} />
    </>
  );
};

export default ContratosAdmin;

/*
codigo anterior de prueba

 const data = await fetchTest("users?page=2");
    Listado = await data.json();
    getContract(Listado.data);
    setLoading(true);

*/
