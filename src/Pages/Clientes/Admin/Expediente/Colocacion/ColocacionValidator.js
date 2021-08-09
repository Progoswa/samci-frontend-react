const ColocacionValidator = (values) => {
    let errors = {};
  
    if (!values.codigo) {
      errors.codigo = "Campo Requerido.";
    }

    if (!values.nombre) {
      errors.nombre = "El nombre es Requerida.";
    }
  
   
    if (!values.tipo) {
        errors.tipo = "La Nacionalidad es Requerida.";
      }

      if (!values.Interes) {
        errors.Interes = "La Edad es Requerida.";
      }  

      
      if (!values.duracion) {
        errors.duracion = "La Edad es Requerida.";
      } 
   
    return errors;
  };
  
  export default ColocacionValidator;