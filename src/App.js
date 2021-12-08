import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 788.21,
    date: new Date(2021, 4, 21),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 788.21,
    date: new Date(2020, 3, 20),
  },
  {
    id: "e3",
    title: "Cycle Insurance",
    amount: 788.21,
    date: new Date(2019, 3, 23),
  },
  {
    id: "e4",
    title: "Plain Insurance",
    amount: 788.21,
    date: new Date(2020, 3, 22),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // adding expense as first item in the array and then followed by old array
    //updating array with new expenses
  };

  console.log("updated expense",expenses);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
