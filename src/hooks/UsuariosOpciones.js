import { fetchSinToken } from '../helpers/fetch'
import Swal from 'sweetalert2'

export const  Deshabilitar = (usuarios) => {
    console.log('Deshabilitar', usuarios.id);
  };

  export const Reset = (usuarios) => {
    console.log('Reset' , usuarios.id);
  };

  export const Borrar = ({first_name , last_name ,id }) => {
    Swal.fire({
      title: `¿Esta seguro de eliminar a ${ first_name + ' ' + last_name } ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy Seguro',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {

        const resp = await fetchSinToken(`users/${id}`, {} ,  "DELETE");
        const body = await resp.json(); 
        if(body.codigo===200)  {
        Swal.fire(
          {
            title:'Usuario Eliminado',
            icon: 'success'
          }
        )}
      }
    })
  };