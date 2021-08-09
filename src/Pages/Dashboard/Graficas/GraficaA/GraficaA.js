import React from 'react';
import BarCharts from './BarCharts'

const GraficaA = () => {
    return (
        <div className="col-md-12 col-lg-7">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total Revenue</h5>
                    <div>
                      {/* <div className="btn-group">
                    <button className="btn btn-default active">
                    <span>Month</span>
                    </button>
                    <button className="btn btn-default">
                    <span>Year</span>
                    </button>
                    </div>*/}
                    </div>
                  </div>
                  <div className="m-t-50" >
                   <BarCharts/>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default GraficaA;