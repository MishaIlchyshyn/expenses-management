import React, { useState } from "react";
import { connect } from "react-redux";

const Management = ({ expenses, state }) => {
  const [inputValue, setInputValue] = useState("");
  console.log(state);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);

  const onSubmit = () => {};

  return (
    <div>
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
    onAddExpense: () => dispatch({ type: "ADD_EXPENSE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Management);
