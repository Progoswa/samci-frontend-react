import Swal from 'sweetalert2'

export const  Deshabilitar = (usuarios) => {
    console.log('Deshabilitar', usuarios.id);
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
    }).then((result) => {
      if (result.isConfirmed) {
       
        console.log('Borrar' , id);
        Swal.fire(
          {
            title:'Usuario Eliminado',
            icon: 'success'
          }
        )
      }
    })
  };

