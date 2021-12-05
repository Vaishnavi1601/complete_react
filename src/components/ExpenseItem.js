//component in js is a just a function, which returns JSX code.
//props -- its an object that will holds all the received attributes as properties
import "./ExpenseItem.css"; 
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) { 

  return (
    <Card className = "expense-item">
      <ExpenseDate date= {props.date}/>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
} 
export default ExpenseItem;
