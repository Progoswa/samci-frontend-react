import validator from 'validator';

const BeneficiarioValidator = (values) => {
    let errors = {};
  
    if (!values.numero) {
      errors.numero = "Numero de Identidad Requerido.";
    }

    if (!values.nombres) {
      errors.nombres = "El Nombre del Beneficiario es Requerido.";
    }

    if (!values.apellidos) {
      errors.apellidos = "El Apellido del Beneficiario es Requerido.";
    }

    if (!values.pais) {
      errors.pais = "Campo Requerido.";
    }

    if (!values.direccion) {
      errors.direccion = "La dirección es Requerida.";
    }
  
    if (!values.ciudad) {
      errors.ciudad = "Campo Requerido.";
    }
  
    if (!values.telefono) {
      errors.telefono = "El Numero de Telefono es Requerido.";
    }
  
    if (!values.email) {
        errors.email = "email es Requerido.";
      }else if (!validator.isEmail(values.email)){
          errors.email = "Correo No Valido."
      }
  
    return errors;
  };
  
  export default BeneficiarioValidator;