import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchSinToken } from "../../../helpers/fetch";

import '../../../App.css'
//import '../../Usuarios/usuarios.css'

var Listado;

const GestionAdmin = () => {
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
      name: "Cliente",
      selector: "id",
      sortable: true,
      grow: 0.5,
    },

    {
      name: "Contrato",
      selector: "codigo_especial",
      sortable: true,
      grow: 1.5,
    },

    {
      name: "Monto",
      selector: "nombre",
      sortable: true,
      grow: 1.5,
    },

    {
      name: "Fecha de Inicio",
      selector: "porcentaje",
      sortable: true,
    },

    {
      name: "Fecha de retorno",
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

 

  return (
    <>
      <div className="input-group rounded mb-3 col-md-3 col-8 float-right d-flex justify-content-end ">
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
                title="Gestion"
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
     
    </>
  );
};

export default GestionAdmin;
