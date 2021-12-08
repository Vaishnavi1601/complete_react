import React from "react";
import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
 
  const titleChangeHandler = (event) => {
    // console.log(event);//event have target property
    //target contains current entered value
    // so to access current value --- event.target.value
    // console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
 
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log("dateChangeHandler",event.target.value);
    setEnteredDate(new Date(event.target.value));
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    // console.log(event);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    // console.log(expenseData);
    //sets the state to empty string(our initial state) after submitting 
    props.onSaveExpenseData(expenseData) 
     
    setEnteredTitle(""); 
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    
      <form onSubmit={submitChangeHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              //two way binding -- for inputs we just dont listen to changes but we can also pass new value into input
              //so that we can reset and change the input progr  amatically
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control label">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              min="2018-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
   
  );
};
export default ExpenseForm;
