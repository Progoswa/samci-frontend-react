import React from 'react';

const UserData = () => {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="avatar avatar-icon avatar-lg avatar-blue">
                      <i className="anticon anticon-dollar"></i>
                    </div>
                    <div className="m-l-15">
                      <h2 className="m-b-0">$23,523</h2>
                      <p className="m-b-0 text-muted">Profit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="avatar avatar-icon avatar-lg avatar-cyan">
                      <i className="anticon anticon-line-chart"></i>
                    </div>
                    <div className="m-l-15">
                      <h2 className="m-b-0">+ 17.21%</h2>
                      <p className="m-b-0 text-muted">Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="avatar avatar-icon avatar-lg avatar-gold">
                      <i className="anticon anticon-profile"></i>
                    </div>
                    <div className="m-l-15">
                      <h2 className="m-b-0">3,685</h2>
                      <p className="m-b-0 text-muted">Orders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="avatar avatar-icon avatar-lg avatar-purple">
                      <i className="anticon anticon-user"></i>
                    </div>
                    <div className="m-l-15">
                      <h2 className="m-b-0">1,832</h2>
                      <p className="m-b-0 text-muted">Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
    );
};

export default UserData;