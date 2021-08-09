import React from "react";
//Components
import GraficaA from "./Graficas/GraficaA/GraficaA";
import GraficaB from "./Graficas/GraficaB/GraficaB";
import UserData from "./UserData/UserData";

const DashboardAdmin = () => {
  return (
    <>
      <UserData />
      <div className="row">
        <GraficaA />
        <GraficaB />
      </div>
    </>
  );
};

export default DashboardAdmin;