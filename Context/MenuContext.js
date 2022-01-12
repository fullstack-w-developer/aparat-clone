
import { createContext, useReducer } from "react";

export const pushMenuContext = createContext();

const initialState = {
  pushMenu: true,
  modeNight: false,
};

const reducer = (state, action) => {
  switch (action.type) {
   case "togglePushMenu":
    return {...state, pushMenu:!state.pushMenu}
    case "modeNight":
      return {...state, modeNight:!state.modeNight}
    default:
      return state;
  }
};

export const PushMenuProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return(
  <pushMenuContext.Provider value={{ globalState , dispatch }}>
  {children}
</pushMenuContext.Provider>
 )
};
