import validator from 'validator';

const RegisterValidator = (values) => {
    let errors = {};
  
  
    if (!values.Nombres) {
      errors.Nombres = "Nombre es Requerido.";
    }

    if (!values.Apellidos) {
        errors.Apellidos = "Apellido es Requerido.";
      }
  
    if (!values.email) {
      errors.email = "email es Requerido.";
    }else if (!validator.isEmail(values.email)){
        errors.email = "Correo No Valido."
    }

    if (!values.Telefono) {
      errors.Telefono = "Telefono es Requerido."
    } else if (values.Telefono.length < 8) {
      errors.Telefono = "El Telefono debe tener almenos 8 caracteres.";
    } 
  
    
    return errors;
  };
  
  export default RegisterValidator;


  /*

  En caso de que el telefono sea opcional
  
   if (values.Telefono.length > 0  && values.Telefono.length < 8 ) {
        errors.Telefono = "El Telefono debe tener almenos 8 caracteres"
      }
  
  */