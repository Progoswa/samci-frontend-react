const ClientesEditValidator = (values) => {
  let errors = {};

  if (!values.IdentidadEdit) {
    errors.IdentidadEdit = "Campo Requerido.";
  }

  if (!values.NIdentidadEdit) {
    errors.NIdentidadEdit = "Numero de Identidad Requerido.";
  }

  if (!values.FechaNacimiento) {
    errors.FechaNacimiento = "Fecha Requerida.";
  }

  if (!values.Nacionalidad) {
    errors.Nacionalidad = "Campo Requerido.";
  }

  if (!values.ciudad) {
    errors.ciudad = "Campo Requerido.";
  }

  if (!values.Direccion) {
    errors.Direccion = "Campo Requerido.";
  }

  if (!values.Telefono) {
    errors.Telefono = "Telefono es Requerido."
  }

  if (!values.Nombres) {
    errors.Nombres = "Nombres Requeridos.";
  }

  if (!values.Apellidos) {
    errors.Apellidos = "Apellidos Requeridos.";
  }

  return errors;
};

export default ClientesEditValidator;
