import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
    { title: "Bike Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
    { title: "Cycle Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
    { title: "Plain Insurance", amount: 788.21, date: new Date(2021, 3, 21) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
