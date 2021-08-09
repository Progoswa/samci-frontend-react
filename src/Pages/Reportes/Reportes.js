import React from 'react';
import ReportesAdmin from './ReportesAdmin/ReportesAdmin';
import E404 from '../E404/E404';

const Reportes = () => {
 
    const rol = localStorage.getItem('rol')

    return (
        <>
          {rol === '1' ?
         <ReportesAdmin/> : 
          <E404/>
         }
        </>
    );
};

export default Reportes;