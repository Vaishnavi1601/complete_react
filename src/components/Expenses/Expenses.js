import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    //filter return new arry original array isn't tocuhed
    return expense.date.getFullYear().toString() === filterYear;
  });

    //intially expenseContent is this
  let expenseContent = <p>No Expense found</p>;
    
  if (filteredExpense.length > 0) {
    //if length of filtered expense is  > 0 
    // console.log("filterdexp::",filteredExpense);
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id} //key helps to identofy individual item
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
       
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
