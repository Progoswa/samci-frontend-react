
const NewPagoValidator = (values) => {
    let errors = {};
  
  
    if (!values.metodo) {
      errors.metodo = "Campo Requerido.";
    }

      if (!values.fecha_operacion) {
        errors.fecha_operacion = "Fecha de Operación Requerido.";
      }  

      if (!values.codigo_confirmacion) {
        errors.codigo_confirmacion = "Comprobante Requerido.";
      }  

      if (!values.monto) {
        errors.monto = "El Monto es Requerido.";
      }
     
    return errors;
  };
  
  export default NewPagoValidator;