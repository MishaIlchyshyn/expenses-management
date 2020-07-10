import * as actions from "./actions";

const initialState = {
  pending: false,
  errorRates: null,

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

    case actions.FETCH_RATES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case actions.FETCH_RATES_SUCCESS:
      return {
        ...state,
        pending: false,
        curr: action.curr,
        total:
          state.expenses
            .map((expense) => +expense.price / action.rates[expense.currency])
            .reduce((a, b) => a + b, 0) * action.rates[action.curr],
      };
    case actions.FETCH_RATES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
