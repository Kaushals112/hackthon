import React from "react";
import { createContext, useEffect, useReducer,useContext } from "react";
import reducer from "./reducer";
const AppContext=createContext();
const initialState={
    isLoading:false,
    isError:false,
    note:"",
    language:""
}

    function AppProvider ({children}){
        const [state,dispatch]=useReducer(reducer,initialState);

        const getData=(e)=>{
            const value=e.target.value
            console.log(value);
            return dispatch ({type:"GET_DATA",payload:value})
        }
        const getLanguage=(e)=>{
            const value=e.target.value
            console.log(value);
            return dispatch ({type:"GET_lANG",payload:value})
        }

        return <AppContext.Provider value={{...state,getData,getLanguage}}> {children}</AppContext.Provider>

}
const useProductContext = () => {
    return useContext(AppContext);
  };
export {AppProvider,AppContext,useProductContext};