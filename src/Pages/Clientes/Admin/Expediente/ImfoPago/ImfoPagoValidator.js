const ImfoPagoValidator = (values) => {
  let errors = {};

  if (!values.metodoPago) {
    errors.metodoPago = "Campo Requerido.";
  }

  if (!values.Identificacion) {
    errors.Identificacion = "La Identificacion es Requerida.";
  }

  if (!values.Codigo) {
    errors.Codigo = "Campo Requerido.";
  }

  if (!values.TitularCuenta) {
    errors.TitularCuenta = "Campo Requerido.";
  }

  if (!values.Banco) {
    errors.Banco = "Campo Requerido.";
  }

  return errors;
};

export default ImfoPagoValidator;
