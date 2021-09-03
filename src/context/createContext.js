import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(
      reducer,
      initialState
    );
    const funcoesProcessadas = {};
    Object.keys(actions).forEach(
      (key) =>
        (funcoesProcessadas[key] = actions[key](dispatch))
    );
    return (
      <Context.Provider
        value={{ state, ...funcoesProcessadas }}
      >
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
