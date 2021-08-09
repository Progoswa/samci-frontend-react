const ContracFormValidator = (values) => {
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

  if (!values.duracion) {
    errors.duracion = "Campo Requerido.";
  } else if (values.duracion >12) {
    errors.duracion = "La duracion no puede ser mayor a doce meses."
  }

  return errors;
};

export default ContracFormValidator;
