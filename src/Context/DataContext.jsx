import { createContext, useContext, useEffect, useReducer } from "react";
import dataReducer, { initialState } from "./Reducer/dataReducer";
import { Fetch, url } from "../Config/api";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const Data = Fetch(url);
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    // console.log(Data);
    if (Data) {
      dispatch({
        type: "initial",
        payload: Data.map((elm) => {
          return { ...elm, isChecked: false };
        }),
      });
    }

  }, [Data]);

  const value = { data: state, dispatch };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
  const context = useContext(DataContext);

  return context;
};

export default useData;
