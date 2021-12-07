
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
    { title: "Bike Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
    { title: "Cycle Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
    { title: "Plain Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
  ];

  const addExpenseHandler = expense =>{
    console.log("in app.js");
    console.log(expense);
  }
  return (
    <div>
      
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
