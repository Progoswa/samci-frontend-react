import React from 'react';
import E404 from '../E404/E404';
import GestionAdmin from './GestionAdmin/GestionAdmin';

const Gestion = () => {
    const rol = localStorage.getItem('rol')
    return (
        <div className="main-content">
          {rol === '1' ?
         <GestionAdmin/>  : 
          <E404/>
         }
        </div>
    );
};

export default Gestion;