import React, { useReducer } from "react";

let initialState = {
  value: 0,
  showMessage: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "aumentar":
      setTimeout(() => {
        try {
          fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
          )
            .then((response) => response.json())
            .then((json) => console.log(json));
        } catch (e) {
          console.log(e);
        }
      }, 3000);
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
