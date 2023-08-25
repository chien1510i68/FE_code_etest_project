"use client";
import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialData = {
  //   getAllUser: {},
  modalOpen: false,
  listDataDocument: [],
  expand: false,
  //   drawerOpen: false,
  //   userID: null,
};

const reducer = (state, action) => {
  // console.log("object state", state);
  console.log("action:: ", action);
  switch (action.type) {
    case "getDocument":
      return { ...state, listDataDocument: action.payload };
    case "modalOpen":
      return { ...state, modalOpen: true, userID: action.payload };
    case "modalClose":
      return { ...state, modalOpen: false };
    case "documentExpand":
      return { ...state, expand: true };
    case "documentCompact":
      return { ...state, expand: false };
    default:
      return state;
  }
};

function AppProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialData);

  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
