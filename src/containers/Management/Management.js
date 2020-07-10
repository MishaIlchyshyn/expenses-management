import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import parser from "../../helpers/parser";
import s from "./Management.module.scss";
import { Icon } from "../../icon/Icon";
import { v4 as uuidv4 } from "uuid";
import fetchRatesAction from "../../store/fetchRates";
import { store } from "../../index";

const Management = ({
  expenses,
  error,
  onAddExpense,
  onClear,
  onError,
  onList,
  state,
  currency,
  total,
  pending,
}) => {
  const [inputValue, setInputValue] = useState("");
  console.log(state);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (parser(inputValue).action === "add") {
      onAddExpense(parser(inputValue));
    } else if (parser(inputValue).action === "clear") {
      onClear(parser(inputValue).date);
    } else if (parser(inputValue).action === "list") {
      onList();
    } else if (parser(inputValue).action === "total") {
      store.dispatch(fetchRatesAction(parser(inputValue).date));
    } else {
      onError();
    }
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {error ? <p className={s.inputErr}>Input Error</p> : ""}

        <div className={s.blockInput}>
          <Icon name="inputArrow" size="14px" />
          <input type="text" value={inputValue} onChange={(e) => onChange(e)} />
        </div>
      </form>
      <div className={s.listExpenses}>
        {expenses.map((expense) => (
          <p key={uuidv4()}>
            {expense.date} {expense.goods} {expense.price} {expense.currency}
          </p>
        ))}
      </div>
      <div className={s.total}>
        {pending ? (
          "Loading..."
        ) : total ? (
          <p>
            {total.toFixed(2)} {currency}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    error: state.error,
    expenses: state.expenses,
    currency: state.curr,
    total: state.total,
    pending: state.pending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddExpense: (inputValue) =>
      dispatch({ type: actions.ADD_EXPENSE, inputVal: inputValue }),
    onClear: (date) => dispatch({ type: actions.CLEAR, date: date }),
    onError: () => dispatch({ type: actions.ERROR }),
    onList: () => dispatch({ type: actions.LIST }),
    onTotal: (currency) =>
      dispatch({ type: actions.TOTAL, currency: currency }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Management);
