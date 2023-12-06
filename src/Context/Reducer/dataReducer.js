export const initialState = {
  data: [],
  filtered: [],
  searched: "",
  deleteManyButton: false,
  allCheckButton: false,
};

const dataReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "initial":
      return { ...state, data: payload };
    case "edit":
      return {
        ...state,
        data: state.data.map((elm) => {
          if (elm.id === payload.id) {
            return { ...elm, ...payload.editForm };
          }
          return elm;
        }),
      };
    case "remove":
      return {
        ...state,
        data: state.data.filter((el) => el.id !== payload.id),
      };
    case "removeMany":
      return {
        ...state,
        data: state.data.filter((el) => !el.isChecked),
      };
    case "check":
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === payload.id) {
            return { ...el, isChecked: payload.value };
          }
          return el;
        }),
      };

    case "unlockManyDelete":
      return {
        ...state,
        deleteManyButton:
          state.data.find((el) => el.isChecked === true) === undefined
            ? false
            : true,
      };
    case "allCheck":
      return {
        ...state,
        allCheckButton: payload.value,
        data: state.data.map((el) => {
          for (let i = 0; i < payload.displayedData.length; i++) {
            if (payload.displayedData[i].id === el.id)
              return { ...el, isChecked: payload.value };
          }
          return el;
        }),
      };

    case "filter":
      return {
        ...state,
        filtered: payload.filtered,
      };
    case "setSearch":
      return {
        ...state,
        searched: payload.search,
      };
    default:
      console.log(`${type} not defined in cases`);
  }
};

export default dataReducer;
