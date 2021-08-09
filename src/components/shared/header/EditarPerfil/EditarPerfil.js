import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EditarPerfil = () => {

  const { name, lastName, email } = useSelector((state) => state.auth);

const Logout = (e) =>{
  e.preventDefault();
  localStorage.clear();  
  window.location.reload()
}

    return (
        <>
            <li className="dropdown dropdown-animated scale-left" >
              <div className="pointer" data-toggle="dropdown">
                <div className="avatar avatar-image  m-h-10 m-r-15">
                  <img src="assets/images/avatars/perfil.jpeg" alt="" />
                </div>
              </div>
              <div className="p-b-15 p-t-20 dropdown-menu pop-profile" style={{width: '300px'}}>
                <div className="p-h-20 p-b-15 m-b-10 border-bottom">
                  <div className="d-flex m-r-50">
                    <div className="avatar avatar-lg avatar-image ">
                      <img src="assets/images/avatars/perfil.jpeg" alt="" />
                    </div>
                    <div className="m-l-10 col-md-8">
                      <p className="m-b-0 text-dark font-weight-semibold">
                        {name} {lastName}
                      </p>
                      <p className="m-b-0 opacity-07">{email}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="./profile"
                  className="dropdown-item d-block p-h-15 p-v-10"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <i className="anticon opacity-04 font-size-16 anticon-user"></i>
                      <span className="m-l-10">Perfil</span>
                    </div>
                    <i className="anticon font-size-10 anticon-right"></i>
                  </div>
                </Link>
                       
                <a
                  href="#!"
                  onClick={Logout}
                  className="dropdown-item d-block p-h-15 p-v-10"
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <i className="anticon opacity-04 font-size-16 anticon-logout"></i>
                      <span className="m-l-10">Cerrar Sesión</span>
                    </div>
                    <i className="anticon font-size-10 anticon-right"></i>
                  </div>
                </a>
              </div>
            </li> 
        </>
    );
};

export default EditarPerfil;