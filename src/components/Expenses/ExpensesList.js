import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  //intially expenseContent is this

  if (props.items.length === 0) {
    return <h2 className='expense-list__fallback'>Found No Expenses</h2>
  }

  return <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id} //key helps to identofy individual item
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  </ul>
};

export default ExpensesList;

