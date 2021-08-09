import { types } from "../types/types";
import { fetchSinToken, fetchConToken } from "../helpers/fetch";
import Swal from "sweetalert2";

export const startLogin = (SendUsuario) => {
  return async (dispatch) => {
    try{
      const resp = await fetchSinToken("login", SendUsuario, "POST");
      const body = await resp.json();
      const data = body.data;
  
      if (body.codigo === 200) {
        const rol = data.usuario.roles[0].pivot.role_id;
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("rol", rol);
        localStorage.setItem("id", data.usuario.id);
  
        dispatch(
          login({
            uid: data.usuario.id,
            name: data.usuario.roles[0].name,
            email : data.usuario.email,
            rol: rol,
            enviado: false,
          })
        );
      } else {
        dispatch(login({ enviado: false }));
        Swal.fire({
          icon: "error",
          title: body.mensaje,
        });
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: 'No se pudo Realizar la accion',
      });
      dispatch(
        login({
          enviado: false,
        })
      );
    }
  };
};


   

export const startChecking = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchConToken("users");
      const body = await resp.json();
      const id = localStorage.getItem("id");

      const user = body.data.filter((users) => users.id = id);
      //console.log(user);
      dispatch(
        login({
          uid: user[0].id,
          name: user[0].nombres,
          lastName : user[0].apellidos,
          email : user[0].email,
          telefono: user[0].telefono
        })
      );
    } catch (e) {
      dispatch(checkingFinish());
    }
  };
};

const checkingFinish = () => ({ type: types.authCheckingFinish });

export const checkingSend = () => ({ type: types.authSend });

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});



