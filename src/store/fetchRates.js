import {
  fetchRatesPending,
  fetchRatesSuccess,
  fetchRatesError,
} from "./actions";

import { store } from "../index";

import { Api } from "../api/Api";

function fetchRates(curr) {
  return (dispatch) => {
    store.dispatch(fetchRatesPending());
    Api.getRates()
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        store.dispatch(fetchRatesSuccess(res.rates, curr));
        return res.rates;
      })
      .catch((error) => store.dispatch(fetchRatesError(error)));
  };
}

export default fetchRates;
