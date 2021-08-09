import React from "react";

const BreadCrumb = () => {
  return (
  
      <div className="page-header">
        <h2 className="header-title">Perfil</h2>
        <div className="header-sub-title">
          <nav className="breadcrumb breadcrumb-dash">
            <a href="#!" className="breadcrumb-item">
              <i className="anticon anticon-home m-r-5"></i>Home
            </a>
            <span className="breadcrumb-item active">Perfil</span>
          </nav>
        </div>
      </div>
   
  );
};

export default BreadCrumb;
