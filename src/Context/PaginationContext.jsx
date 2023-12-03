import { createContext, useContext, useReducer } from "react";
import paginationReducer, { initialState } from "./Reducer/paginationReducer";

export const PaginationContext = createContext(initialState);

export const PaginationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  const value = { pagination: state, dispatch };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

const usePagination = () => {
  const context = useContext(PaginationContext);

  return context;
};

export default usePagination;
