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

  console.log();
  const filteredExpense = props.items.filter(expense => {
    //filter return new arry original array isn't tocuhed
    console.log(16,expense.date);
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
      
        {filteredExpense.map((expense) => ( // map takes function as an argument and that takes the old array and returns new array with modification
          <ExpenseItem
            key = {expense.id} //key helps to identofy individual item
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
