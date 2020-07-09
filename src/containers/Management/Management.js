import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import parser from "../../helpers/parser";

const Management = ({ expenses, state, onAddExpense, onClear }) => {
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
      onClear();
    } else {
      console.log("error");
    }
    setInputValue("");
    console.log(state);
    console.log(parser(inputValue));
  };

  return (
    <div>
      <div>
        {expenses.map((expense) => (
          <p>
            {expense.date} {expense.goods} {expense.price} {expense.currency}
          </p>
        ))}
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={(e) => onChange(e)} />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddExpense: (inputValue) =>
      dispatch({ type: actions.ADD_EXPENSE, inputVal: inputValue }),
    onClear: () => dispatch({ type: actions.CLEAR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Management);
