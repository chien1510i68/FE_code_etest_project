"use client";
import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialData = {
  //   getAllUser: {},
  modalDownloadOpen: false,
  modalLoginOpen: false,
  modalRegisterOpen: false,
  modalRegisterAccOpen: false,
  modalForgetPasswordOpen: false,
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
    case "modalDownloadOpen":
      return { ...state, modalDownloadOpen: true, userID: action.payload };
    case "modalDownloadClose":
      return { ...state, modalDownloadOpen: false };
    case "modalLoginOpen":
      return { ...state, modalLoginOpen: true };
    case "modalLoginClose":
      return { ...state, modalLoginOpen: false };
    case "modalForgetPasswordOpen":
      return { ...state, modalForgetPasswordOpen: true };
    case "modalForgetPasswordClose":
      return { ...state, modalForgetPasswordOpen: false };
    case "modalRegisterOpen":
      return { ...state, modalRegisterOpen: true };
    case "modalRegisterClose":
      return { ...state, modalRegisterOpen: false };
    case "modalRegisterAccOpen":
      return { ...state, modalRegisterAccOpen: true };
    case "modalRegisterAccClose":
      return { ...state, modalRegisterAccOpen: false };
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
