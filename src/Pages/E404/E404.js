import React from 'react';

const E404 = () => {
    return (
        <div className="app">
        <div className="container-fluid">
            <div className="d-flex full-height p-v-20 flex-column justify-content-between">
                <div className="d-none d-md-flex p-h-40">
                    <img src="assets/images/logo/logo.png" alt=""/>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="p-v-30">
                                <h1 className="font-weight-semibold display-1 text-primary lh-1-2">404</h1>
                                <h2 className="font-weight-light font-size-30">Whoops! Looks like you got lost</h2>
                                <p className="lead m-b-30">We couldnt find what you were looking for.</p>
                                <a href="#!" className="btn btn-primary btn-tone">Go Back</a>
                            </div>
                        </div>
                        <div className="col-md-6 m-l-auto">
                            <img className="img-fluid" src="assets/images/others/error-1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-flex  p-h-40 justify-content-between">
                    <span className="">© 2019 ThemeNate</span>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="text-dark text-link" target="_blank" href="/legal">Políticas y Privacidad</a>
                        </li>
                        <li className="list-inline-item">
                            {/*<a className="text-dark text-link" href="#">Privacy</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default E404;