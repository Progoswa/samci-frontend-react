import React from 'react';

const FormGetPassword = () => {
    return (
        <form>
        <div className="form-group">
          <label className="font-weight-semibold" htmlFor="userName">
            Ingrese su Email
          </label>
          <div className="input-affix">
            <i className="prefix-icon anticon anticon-user"></i>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Username"
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="d-flex align-items-center justify-content-between">
            <span className="font-size-13 text-muted"></span>
            <button className="btn btn-primary">Continuar</button>
          </div>
        </div>
      </form>
    );
};

export default FormGetPassword;