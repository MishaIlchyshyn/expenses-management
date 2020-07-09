import React from "react";
import { connect } from "react-redux";

const Management = ({ expenses }) => {
  return <div>Management: {expenses}</div>;
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddExpense: () => dispatch({ type: "ADD_EXPENSE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Management);
