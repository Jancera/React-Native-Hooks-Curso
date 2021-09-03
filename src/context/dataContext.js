import React, { useReducer } from "react";
import createContext from "./createContext";

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

const aumentar = (dispatch) => {
  return (value) => {
    dispatch({ type: "aumentar", payload: value });
  };
};

const toggle = (dispatch) => {
  return (boolean) => {
    dispatch({ type: "toggle", payload: boolean });
  };
};

const acessarAPI = (dispatch) => {
  return () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));

    console.log("dispatch");
  };
};

export const { Context, Provider } = createContext(
  reducer,
  { aumentar, toggle, acessarAPI },
  initialState
);
