import * as actions from "./actions";

const initialState = {
  expenses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.concat(action.inputVal),
      };
    case actions.CLEAR:
      return {
        ...state,
        expenses: (state.expenses.length = []),
      };
    default:
      return state;
  }
};

export default reducer;
