import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DashboardRoutes from "./DashboardRoutes";
import { startChecking } from "../actions/auth";
//Paginas
import Login from "../components/auth/Login/Login";
import GetBackPassword from "../components/auth/GetBackPassword/GetBackPassword";

//Rutas Publicas y Privadas
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

function AppRouter() {
  const dispatch = useDispatch();
  const { checking , uid } = useSelector((state) => state.auth);

  useEffect(() => {
        
    dispatch( startChecking() );

}, [dispatch])

if (checking) {
  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto d-flex align-items-center min-vh-100">
          <img src="./assets/images/loading/Cargando.gif" alt="Logo" />
        </div>
      </div>
    </div>
  );
}

  return (
    <>
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={!!uid}
          />
          <PublicRoute
            exact
            path="/getBackPassword"
            component={GetBackPassword}
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            path="/"
            component={DashboardRoutes}
            isAuthenticated={!!uid}
          />

          {/*<Route  component={E404} />*/}
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;

/*if (checking) {
    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto d-flex align-items-center min-vh-100">
            <img src="./assets/images/loading/Cargando.gif" alt="Logo" />
          </div>
        </div>
      </div>
    );
  }*/