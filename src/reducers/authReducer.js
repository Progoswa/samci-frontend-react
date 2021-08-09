import { types } from "../types/types";

const initialState = {
  checking: true,
  enviado:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,

      };

    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

      case types.authSend:
        return {
          ...state,
          enviado: true,
        };  

    default:
      return state;  
  }
};
