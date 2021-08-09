import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { fetchSinToken } from "../../helpers/fetch";

const TablaSimuladorPagos = () => {
  const hoy = new Date();
  const dia = hoy.getDate();
  const mes = hoy.getMonth() + 1;
  const agnio = hoy.getFullYear();
  const fechaInicio = `${dia}/${mes}/${agnio}`;

  const Monto = localStorage.getItem("montoSimulador");
  const Contract = localStorage.getItem("idContract");
  const [ContratoElegido, getContrato] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ObtenerContrato();
  }, []);

  useEffect(() => {
    CalcularGanancia();
    CalcularMeses();
  });

  const ObtenerContrato = async () => {
    try {
      const data = await fetchSinToken(`contracts/${Contract}`);
      const datosCliente = await data.json();
      //console.log(datosCliente)
      getContrato(datosCliente.data);
      setLoading(true);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "No se pudieron Cargar los Datos",
      });
    }
  };

  const CalcularGanancia = () => {
    if (ContratoElegido.tasa_interes !== undefined) {
      const porcentaje = ContratoElegido.tasa_interes / 100;

      const gananciaMes1 = porcentaje * Number(Monto) //+ Number(Monto);
      getUtilidadMes1(gananciaMes1);

      const gananciaMes2 = porcentaje * Number(Monto) //+ gananciaMes1;
      getUtilidadMes2(gananciaMes2);

      const gananciaMes3 = porcentaje * Number(Monto) //+ gananciaMes2;
      getUtilidadMes3(gananciaMes3);

      const gananciaMes4 = porcentaje * Number(Monto) //+ gananciaMes3;
      getUtilidadMes4(gananciaMes4);

      const gananciaMes5 = porcentaje * Number(Monto) //+ gananciaMes4;
      getUtilidadMes5(gananciaMes5);

      const gananciaMes6 = porcentaje * Number(Monto) //+ gananciaMes5;
      getUtilidadMes6(gananciaMes6);

      const gananciaMes7 = porcentaje * Number(Monto) //+ gananciaMes6;
      getUtilidadMes7(gananciaMes7);

      const gananciaMes8 = porcentaje * Number(Monto) //+ gananciaMes7;
      getUtilidadMes8(gananciaMes8);

      const gananciaMes9 = porcentaje * Number(Monto) //+ gananciaMes8;
      getUtilidadMes9(gananciaMes9);

      const gananciaMes10 = porcentaje * Number(Monto) //+ gananciaMes9;
      getUtilidadMes10(gananciaMes10);

      const gananciaMes11 = porcentaje * Number(Monto) //+ gananciaMes10;
      getUtilidadMes11(gananciaMes11);

      const gananciaMes12 = porcentaje * Number(Monto) //+ gananciaMes11;
      getUtilidadMes12(gananciaMes12);

      const gananciaTotal = (porcentaje * Number(Monto)) * ContratoElegido.duracion
      getTotal(gananciaTotal)
    }
  };

  const CalcularMeses = () => {
    const fecha = new Date();
    var mesActual = fecha.getMonth();

    if (mesActual == 11) {
      mesActual = 0;
      var pago1 = mesActual + 1;
      getMes1(pago1);
    } else {
      var pago1 = mesActual + 2;
      getMes1(pago1);
    }

    if (Mes1 == 11) {
      mesActual = 0;
      var pago2 = mesActual;
      getMes2(pago2);
    } else {
      var pago2 = pago1 + 1;
      getMes2(pago2);
    }

    if (Mes2 == 11) {
      mesActual = 0;
      var pago3 = mesActual;
      getMes3(pago3);
    } else {
      var pago3 = pago2 + 1;
      getMes3(pago3);
    }

    if (Mes3 == 11) {
      mesActual = 0;
      var pago4 = mesActual;
      getMes4(pago4);
    } else {
      var pago4 = pago3 + 1;
      getMes4(pago4);
    }

    if (Mes4 == 11) {
      mesActual = 0;
      var pago5 = mesActual;
      getMes5(pago5);
    } else {
      var pago5 = pago4 + 1;
      getMes5(pago5);
    }

    if (Mes5 == 11) {
      mesActual = 0;
      var pago6 = mesActual;
      getMes6(pago6);
    } else {
      var pago6 = pago5 + 1;
      getMes6(pago6);
    }

    if (Mes6 == 11) {
      mesActual = 0;
      var pago7 = mesActual;
      getMes7(pago7);
    } else {
      var pago7 = pago6 + 1;
      getMes7(pago7);
    }

    if (Mes7 == 11) {
      mesActual = 0;
      var pago8 = mesActual;
      getMes8(pago8);
    } else {
      var pago8 = pago7 + 1;
      getMes8(pago8);
    }

    if (Mes8 == 11) {
      mesActual = 0;
      var pago9 = mesActual;
      getMes9(pago9);
    } else {
      var pago9 = pago8 + 1;
      getMes9(pago9);
    }

    if (Mes9 == 11) {
      mesActual = 0;
      var pago10 = mesActual;
      getMes10(pago10);
    } else {
      var pago10 = pago9 + 1;
      getMes10(pago10);
    }

    if (Mes10 == 11) {
      mesActual = 0;
      var pago11 = mesActual;
      getMes11(pago11);
    } else {
      var pago11 = pago10 + 1;
      getMes11(pago11);
    }

    if (Mes11 == 11) {
      mesActual = 0;
      var pago12 = mesActual;
      getMes12(pago12);
    } else {
      var pago12 = pago11 + 1;
      getMes12(pago12);
    }
  };
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Nobiembre",
    "Diciembre",
  ];

  //MesPago
  const [Mes1, getMes1] = useState(0);
  const [Mes2, getMes2] = useState(0);
  const [Mes3, getMes3] = useState(0);
  const [Mes4, getMes4] = useState(0);
  const [Mes5, getMes5] = useState(0);
  const [Mes6, getMes6] = useState(0);
  const [Mes7, getMes7] = useState(0);
  const [Mes8, getMes8] = useState(0);
  const [Mes9, getMes9] = useState(0);
  const [Mes10, getMes10] = useState(0);
  const [Mes11, getMes11] = useState(0);
  const [Mes12, getMes12] = useState(0);
  const [Total, getTotal] = useState(0);

  //Utilidades
  const [UtilidadMes1, getUtilidadMes1] = useState(0);
  const [UtilidadMes2, getUtilidadMes2] = useState(0);
  const [UtilidadMes3, getUtilidadMes3] = useState(0);
  const [UtilidadMes4, getUtilidadMes4] = useState(0);
  const [UtilidadMes5, getUtilidadMes5] = useState(0);
  const [UtilidadMes6, getUtilidadMes6] = useState(0);
  const [UtilidadMes7, getUtilidadMes7] = useState(0);
  const [UtilidadMes8, getUtilidadMes8] = useState(0);
  const [UtilidadMes9, getUtilidadMes9] = useState(0);
  const [UtilidadMes10, getUtilidadMes10] = useState(0);
  const [UtilidadMes11, getUtilidadMes11] = useState(0);
  const [UtilidadMes12, getUtilidadMes12] = useState(0);

  return (
    <>
      {loading ? (
        <div
          className="container-fluid bg-primary pt-3 pl-0 pr-0 pb-4 "
          style={{ border: "solid 1px black" }}
        >
          <div className="row w-95 mx-auto deck">
            
            <div className="col-md-3">
              <h5 className="text-light ml-0 pl-0 ">Inversion Inicial</h5>
              <h5 className="text-light ml-0 pl-0">Tipo de Capitalizacion</h5>
            </div>
            <div
              className="col-md-3 bg-light  "
              style={{ border: "solid 1px black" }}
            > 
            
              <h5 className="text-center">{Monto}$</h5>
              <h5 className="text-center">{ContratoElegido.tipo}</h5>
            </div>
           
            <div className="col-md-3">
              <h5 className="text-light">Interes</h5>
              <h5 className="text-light">Fecha de Inicio</h5>
            </div>
            <div
              className="col-md-3 bg-light "
              style={{ border: "solid 1px black" }}
            >
              <h5 className="text-center">{ContratoElegido.tasa_interes}</h5>
              <h5 className="text-center">{fechaInicio}</h5>
            </div>
          </div>
          {/*Mobile*/}
          <div className="row w-95 mx-auto mobile ">
            
            <div
              className="col-md-3 bg-light w-95 mx-auto  "
              style={{ border: "solid 1px black" }}
            >
             <div className='d-flex justify-content-around'>
               <h5 className="text-center">Inversion Inicial</h5>
              <h5 className="text-center">{Monto}$</h5>
               </div>
               <div className='d-flex justify-content-around'>
               <h5 className="text-center ">Tipo de Capitalizacion</h5>
              <h5 className="text-center">{ContratoElegido.tipo}</h5>
                 </div>
            </div>
            <br></br>
            <div
              className="col-md-3 bg-light w-95 mx-auto "
              style={{ border: "solid 1px black" }}
            >
              <div className='d-flex justify-content-around'>
               <h5 className="text-center">Interes</h5>
              <h5 className="text-center">{ContratoElegido.tasa_interes}</h5>
               </div>
               <div className='d-flex justify-content-around'>
               <h5 className="text-center ">Fecha de Inicio</h5>
              <h5 className="text-center">{fechaInicio}</h5>
                 </div>
            </div>
          </div>
          {/*Fin Mobile*/}
          <br></br>
          <table className="table bg-light w-95 mx-auto">
            <thead>
              <tr>
                <th scope="col">Pagos</th>
                <th scope="col">Mes de Pagos</th>
                <th scope="col">%</th>
                <th scope="col">Utilidad</th>
              </tr>
            </thead>
            <tbody>
               
                <tr>
                  <td>Primer Pago</td>
                  <td>{meses[Mes1]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes1}$</td>
                </tr>
              

              { ContratoElegido.duracion >= 2 &&
                (<tr>
                  <td>Segundo Pago</td>
                  <td>{meses[Mes2]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes2}$</td>
                </tr>)
              }

              { ContratoElegido.duracion >= 3 &&
                (<tr>
                  <td>Tercer Pago</td>
                  <td>{meses[Mes3]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes3}$</td>
                </tr>)
              }

              { ContratoElegido.duracion >= 4 &&
               ( <tr>
                  <td>Cuarto Pago</td>
                  <td>{meses[Mes4]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes4}$</td>
                </tr>)
              }

              { ContratoElegido.duracion >= 5 &&
               ( <tr>
                  <td>Sexto Pago</td>
                  <td>{meses[Mes5]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes5}$</td>
                </tr>)
              }

              { ContratoElegido.duracion >= 6 &&
                (<tr>
                  <td>Septimo Pago</td>
                  <td>{meses[Mes6]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes6}$</td>
                </tr>)
              }

              {  ContratoElegido.duracion >= 7 &&
                (<tr>
                  <td>Octavo Pago</td>
                  <td>{meses[Mes7]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes7}$</td>
                </tr>)
              }

              { ContratoElegido.duracion >= 8 &&
               ( <tr>
                  <td>Segundo Pago</td>
                  <td>{meses[Mes8]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes8}$</td>
                </tr>)
              }

              { ContratoElegido.duracion >= 9 &&
                (<tr>
                  <td>Noveno Pago</td>
                  <td>{meses[Mes9]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes9}$</td>
                </tr>)
              }

              {ContratoElegido.duracion >= 10 && (
                <tr>
                  <td>Decimo Pago</td>
                  <td>{meses[Mes10]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes10}$</td>
                </tr>
              )}

              {ContratoElegido.duracion >= 11 && (
                <tr>
                  <td>Decimo Primer Pago</td>
                  <td>{meses[Mes11]} - 01</td>
                  <td>{ContratoElegido.tasa_interes}%</td>
                  <td>{UtilidadMes11}$</td>tasa_interes
                </tr>
              )}

              {ContratoElegido.duracion >= 12 && (
                <>
                  <tr>
                    <td>Desimo Segundo Pago</td>
                    <td>{meses[Mes12]} - 01</td>
                    <td>{ContratoElegido.tasa_interes}%</td>
                    <td>{UtilidadMes12}$</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <h5 className="ml-5 mr-4 d-flex justify-content-end font-weight-bold">Devolucion de Capital: {Total}</h5>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="mx-auto d-flex align-items-center min-vh-80">
              <img src="./assets/images/loading/Cargando.gif" alt="Logo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TablaSimuladorPagos;
