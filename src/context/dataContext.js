import React, { useReducer } from "react";

let initialState = {
  value: 0,
  showMessage: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "aumentar":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "toggle":
      return { ...state, showMessage: action.payload };
    default:
      return state;
  }
};

// action = {type:"", payload: 0}

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
