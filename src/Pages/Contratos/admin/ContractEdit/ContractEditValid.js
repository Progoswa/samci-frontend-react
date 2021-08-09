
const ContractEditValid = (values) => {
    let errors = {};
  
  
    if (!values.codigo) {
      errors.codigo = "El codigo es Requerido.";
    }
  
    if (!values.nombre) {
      errors.nombre = "El Nombre es Requerido.";
    }
  
    if (!values.porcentaje) {
      errors.porcentaje = "El Porcentaje es Requerido.";
    }
  
    if (!values.tipo) {
      errors.tipo = "Campo Requerido.";
    }
     
    return errors;
  };
  
  export default ContractEditValid;

