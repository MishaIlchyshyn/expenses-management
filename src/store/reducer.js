import * as actions from "./actions";

const initialState = {
  expenses: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_EXPENSE:
      return {
        ...state,
        error: (state.error = false),
        expenses: state.expenses.concat(action.inputVal),
      };
    case actions.CLEAR:
      return {
        ...state,
        error: (state.error = false),
        expenses: state.expenses.filter(
          (expense) => expense.date !== action.date
        ),
      };
    case actions.ERROR:
      return {
        ...state,
        error: (state.error = true),
      };
    case actions.LIST:
      return {
        expenses: state.expenses.sort(function (a, b) {
          if (a.date < b.date) {
            return -1;
          }
          if (a.date > b.date) {
            return 1;
          }
          return 0;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
