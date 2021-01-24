import React, { useReducer, createContext } from "react";

const initailState = [
  { id: 1, data: "Cash", amount: -100 },
  { id: 2, data: "Veggies", amount: -10 },
  { id: 3, data: "Salary", amount: 400 },
];

const ACTIONS = {
  ADD_TRANSCATION: "add",
  DELETE_TRANSCATION: "delete",
};
//Create Context
export const Data = createContext(initailState);

// Proider Component
export const Provider = ({ children }) => {
  function Delete(id) {
    dispatch({ type: ACTIONS.DELETE_TRANSCATION, payload: id });
  }
  function AddTranscation(item) {
    dispatch({ type: ACTIONS.ADD_TRANSCATION, payload: item });
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.DELETE_TRANSCATION: {
        return state.filter((item) => item.id !== action.payload);
      }
      case ACTIONS.ADD_TRANSCATION: {
        console.log("this is paylaod", action.payload);
        return [...state, action.payload];
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <Data.Provider value={{ data: state, Delete, AddTranscation }}>
      {children}
    </Data.Provider>
  );
};
