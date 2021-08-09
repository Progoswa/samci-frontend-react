import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { fetchSinToken } from "../../../../../helpers/fetch";
import DatosBancoValidator from "./DatosBancoValidator";

const Beneficiario = ({id}) => {

  //Obtener Datos del Banco desde el Api
  //const [loading, setLoading] = useState(false);
  useEffect(() => {
    ObtenerBanco();
  }, []);

  const ObtenerBanco = async () => {
    const data = await fetchSinToken(`customer/1/account`);
    const Bancos = await data.json()
    const banco = Bancos.data.filter(item => item.id === Number(id) );

    if(banco[0] !== undefined){
    getBancoDatos({
      Banco: banco[0].nombre_banco || '',
    NumerodeCuenta: banco[0].numero_cuenta || '' ,
    TipodeCuenta: banco[0].tipo_cuenta || '',
    CorreodeZelle: banco[0].correo_zelle || '',
    SWIFT: banco[0].swift || '',
    ABA: banco[0].aba || '',
    })
  } 
  };


  //State para Registro
  const [BancoDatos, getBancoDatos] = useState({
    Banco:  "",             
    NumerodeCuenta: "",
    TipodeCuenta:  "",
    CorreodeZelle:  "",
    SWIFT: "",
    ABA:  "",
  });
  //Onchange
  const handleInputChange = ({target}) => {
    const esValido = target.validity.valid;
    if (esValido) {

      getBancoDatos ({
            ...BancoDatos ,
            [target.name] : target.value
        });
    }  
   }  

  // Extrae de Usuario
  const { Banco, NumerodeCuenta, TipodeCuenta, CorreodeZelle, SWIFT, ABA } = BancoDatos;

  //Validaciones del Formulario

  const [error, SetError] = useState({});
  const [DataIsCorrect, getDataIsCorrect] = useState(false);
  //Registro
  const handleDatos = (e) => {
    e.preventDefault();
    SetError(DatosBancoValidator(BancoDatos));
    getDataIsCorrect(true);
  };

  const send = async () => {
    getEditandoBa(false);
    try {
      const DataSend =  {
        "nombre" :Banco ,
        "numero":NumerodeCuenta ,
        "tipo" :TipodeCuenta ,
        "Zelle":CorreodeZelle ,
        "swift":SWIFT ,
        "aba": ABA
        }
      await fetchSinToken(`customer/${id}/account`,DataSend, "POST");
      ObtenerBanco();
      Swal.fire({
        icon: "success",
        title: "Datos Bancarios Editados",
      });
      getEditandoBa(true);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "No se pudo completar la accion",
      });
      getEditandoBa(true);
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && DataIsCorrect) {
      send();
    }
  }, [error, DataIsCorrect]);

  //Editar
  const [active, getActive] = useState(true);
  const [contador, getContador] = useState(0);
  const Editar = () => {
    if (contador === 0) {
      getActive(false);
      getContador(1);
    } else if (contador === 1) {
      getActive(true);
      getContador(0);
    }
  };

    //Boton Enviar
    const [editandoBa, getEditandoBa] = useState(true);

  return (
   
      <form onSubmit={handleDatos}>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Banco:
            </label>
            <input
              type="text"
              className="form-control"
              id="Banco"
              placeholder="Banco"
              name="Banco"
              value={Banco}
              onChange={handleInputChange}
              pattern="^[A-Za-z ]+$"
              disabled={active}
            />
            {error.Banco && (
              <p className="font-weight-bold text-danger">{error.Banco}</p>
            )}
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Numero de Cuenta:
            </label>
            <input
              type="text"
              className="form-control"
              id="NumerodeCuenta"
              placeholder="Numero de Cuenta"
              name="NumerodeCuenta"
              value={NumerodeCuenta}
              onChange={handleInputChange}
              pattern="^[0-9- ]+$"
              disabled={active}
            />
            {error.NumerodeCuenta && (
              <p className="font-weight-bold text-danger">{error.NumerodeCuenta}</p>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Tipo de Cuenta:
            </label>
            <input
              type="text"
              className="form-control"
              id="TipodeCuenta"
              placeholder="TipodeCuenta"
              name="TipodeCuenta"
              value={TipodeCuenta}
              onChange={handleInputChange}
              pattern="^[A-Za-z0-9]+$"
              disabled={active}
            />
            {error.TipodeCuenta && (
              <p className="font-weight-bold text-danger">{error.TipodeCuenta}</p>
            )}
          </div>

          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            Correo de Zelle:
            </label>
            <input
              type="text"
              className="form-control"
              id="CorreodeZelle"
              placeholder="Correo de Zelle"
              name="CorreodeZelle"
              value={CorreodeZelle}
              onChange={handleInputChange}
              disabled={active}
            />
            {error.CorreodeZelle && (
              <p className="font-weight-bold text-danger">{error.CorreodeZelle}</p>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-between flex-wrap">
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            SWIFT:
            </label>
            <input
              type="text"
              className="form-control"
              id="SWIFT"
              placeholder="SWIFT"
              name="SWIFT"
              value={SWIFT}
              onChange={handleInputChange}
              pattern="^[A-Za-z0-9]+$"
              disabled={active}
            />
            {error.SWIFT && (
              <p className="font-weight-bold text-danger">{error.SWIFT}</p>
            )}
          </div>
         
          <div className="form-group col-lg-6 col-md-12">
            <label className="font-weight-semibold" htmlFor="userName">
            ABA:
            </label>
            <input
              type="text"
              className="form-control"
              id="ABA"
              placeholder="ABA"
              name="ABA"
              value={ABA}
              onChange={handleInputChange}
              pattern="^[a-zA-Z0-9]+$"
              disabled={active}
            />
            {error.ABA && (
              <p className="font-weight-bold text-danger">{error.ABA}</p>
            )}
          </div>
          
        </div>

        <div className="row">
          <div className="col-md-6 "></div>
          <div className="col-md-6 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary mr-3 "
              onClick={Editar}
            >
              {active ? (
                <i className="fas fa-unlock"></i>
              ) : (
                <i className="fas fa-lock"></i>
              )}
            </button>
            {editandoBa ? (
              <button
                type="submit"
                className="btn btn-primary ml 5"
                disabled={active}
              >
                Guardar Cambios
              </button>
            ) : (
              <button className="btn font-weight-bold boton">
                Guardando...
              </button>
            )}
          </div>
        </div>
      </form>
    
  );
};

export default Beneficiario;
