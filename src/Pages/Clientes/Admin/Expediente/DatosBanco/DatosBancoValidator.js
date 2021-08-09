import validator from 'validator';

const DatosBancoValidator = (values) => {
    let errors = {};
  
    if (!values.Banco) {
      errors.Banco = "El Nombre del Banco es Requerido.";
    }
   
    if (!values.NumerodeCuenta) {
      errors.NumerodeCuenta = "El Numero de Cuenta es Requerido.";
    }

     
    if (!values.TipodeCuenta) {
        errors.TipodeCuenta = "Tipo de cuenta es Requerido.";
      }
  
    if (!values.CorreodeZelle) {
        errors.CorreodeZelle = "Correo es Requerido.";
      }else if (!validator.isEmail(values.CorreodeZelle)){
          errors.CorreodeZelle = "Correo No Valido."
      }

      if (!values.SWIFT) {
        errors.SWIFT = "SWIFT es Requerido.";
      }

      if (!values.ABA) {
        errors.ABA = "ABA es Requerido.";
      }
  
    return errors;
  };
  
  export default DatosBancoValidator;