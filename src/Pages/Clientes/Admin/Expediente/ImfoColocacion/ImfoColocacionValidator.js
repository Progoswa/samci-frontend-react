const ImfoColocacionValidator = (values) => {
    let errors = {};
  
    if (!values.Duracion) {
      errors.Duracion = "Campo Requerido.";
    }
  
    if (!values.Identificacion) {
      errors.Identificacion = "La Identificacion es Requerida.";
    }

    if (!values.Pago) {
        errors.Pago = "Campo Requerido.";
      }

      if (!values.Edad) {
        errors.Edad = "La Edad es Requerida.";
      }  
   
    return errors;
  };
  
  export default ImfoColocacionValidator;