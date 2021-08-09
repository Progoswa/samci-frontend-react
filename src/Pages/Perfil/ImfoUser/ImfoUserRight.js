import React from "react";
import { useSelector } from "react-redux";

const ImfoUserRight = () => {
  const { name, lastName, email, telefono } = useSelector(
    (state) => state.auth
  );

  return (
    <div className="col-md-6">
      <div className="row">
        <div className="d-md-block d-none border-left col-1"></div>
        <div className="col">
          <h2 className="m-b-5">
            {name} {lastName}
          </h2>
          <br></br>
          <ul className="list-unstyled m-t-10">
            <li className="row">
              <p className="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                <i className="m-r-10 text-primary anticon anticon-mail"></i>
                <span>Email: </span>
              </p>
              <p className="col font-weight-semibold">{email}</p>
            </li>
            <li className="row">
              <p className="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                <i className="m-r-10 text-primary anticon anticon-phone"></i>
                <span>Telefono: </span>
              </p>
              <p className="col font-weight-semibold"> {telefono}</p>
            </li>
          </ul>
          <br></br>
          <button
            className="btn btn-primary btn-tone"
            data-toggle="modal"
            data-target="#Contact"
          >
            Contacto
          </button>
        </div>
      </div>

      {/*Modal*/}
      <div
        className="modal fade"
        id="Contact"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content w-80">
            <div className="modal-header">
              <h4 className="modal-title w-100 text-center font-weight-bold" id="exampleModalLabel">
                Contacto
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-auto">
              <ul className="list-unstyled m-t-10">
                <li className="row">
                  <p className=" font-weight-semibold text-dark m-b-5">
                    <i className="m-r-10 text-primary anticon anticon-mail"></i>
                    <span>Email: </span>
                  </p>
                  <p className="col font-weight-semibold"> Marshall123@gmail.com</p>
                </li>
                <li className="row">
                  <p className=" font-weight-semibold text-dark m-b-5">
                    <i className="m-r-10 text-primary anticon anticon-phone"></i>
                    <span>Telefono: </span>
                  </p>
                  <p className="col font-weight-semibold"> +12-123-1234</p>
                </li>
                <li className="row">
                  <p className=" font-weight-semibold text-dark m-b-5">
                    <i className="m-r-10 text-primary anticon anticon-compass"></i>
                    <span>localización</span>
                  </p>
                  <p className="col font-weight-semibold"> Los Angeles, CA</p>
                </li>
              </ul>
              <div className="d-flex font-size-22 m-t-15 justify-content-center">
                <a href="!#" className="text-gray p-r-20">
                  <i className="anticon anticon-facebook"></i>
                </a>
                <a href="!#" className="text-gray p-r-20">
                  <i className="anticon anticon-twitter"></i>
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary mx-auto w-30"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              {/*<button type="button" className="btn btn-primary">
                Save changes
             </button>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImfoUserRight;
