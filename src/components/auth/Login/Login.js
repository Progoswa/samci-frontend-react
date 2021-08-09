import React from "react";
import FormLogin from "./FormLogin/FormLogin";

const Login = () => {
  return (
    <div className="app">
      <div className="container-fluid p-0 h-100">
        <div className="row no-gutters h-100 full-height">
          <div
            className="col-lg-4 d-none d-lg-flex bg"
            style={{
              backgroundImage: "url('assets/images/others/skyscraper.jpg')",
              filter:' brightness(80%)'
            }}
          >
            <div className="d-flex h-100 p-h-40 p-v-15 flex-column justify-content-between">
            <div>
               {<img src="assets/images/logo/logo_samci_web.png" alt=""
                style={{
                 width:'40%',
                }}
              />}
              </div>
              {/*<div>
                <h1 className="text-white m-b-20 font-weight-normal">
                  Exploring Enlink
                </h1>
                <p className="text-white font-size-16 lh-2 w-80 opacity-08">
                  Climb leg rub face on everything give attitude nap all day for
                  under the bed. Chase mice attack feet but rub face on
                  everything hopped up.
                </p>  assets/images/logo/logo_samci_web
              </div>
              <div>
                <img src="assets/images/logo/logo-white.png" alt="" />
              </div>
              */}
              <div className="d-flex justify-content-between">
                <span className="text-white">Olah Agency</span>
                <ul className="list-inline ml-5">
                  <li className="list-inline-item">
                    <a className="text-white text-link" href="#!">
                      Políticas y Privacidad
                    </a>
                  </li>
                 {/* <li className="list-inline-item">
                    <a className="text-white text-link" href="#!">
                      Privacy
                    </a>
                  </li>*/}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 bg-white">
            <div className="container h-100">
              <div className="row no-gutters h-100 align-items-center">
                <div className="col-md-8 col-lg-7 col-xl-6 mx-auto">
                  <h2>Iniciar sesión</h2>
                  <p className="m-b-30">Ingresa tus datos para acceder</p>
                  <FormLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;




