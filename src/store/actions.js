export const ADD_EXPENSE = "ADD_EXPENSE";
export const CLEAR = "CLEAR";
export const ERROR = "ERROR";
export const LIST = "LIST";
export const TOTAL = "TOTAL";

export const FETCH_RATES_PENDING = "FETCH_RATES_PENDING";
export const FETCH_RATES_SUCCESS = "FETCH_RATES_SUCCESS";
export const FETCH_RATES_ERROR = "FETCH_RATES_ERROR";

export function fetchRatesPending() {
  return {
    type: FETCH_RATES_PENDING,
  };
}

export function fetchRatesSuccess(rates, curr) {
  return {
    type: FETCH_RATES_SUCCESS,
    rates: rates,
    curr: curr,
  };
}

export function fetchRatesError(error) {
  return {
    type: FETCH_RATES_ERROR,
    error: error,
  };
}
