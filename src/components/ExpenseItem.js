//component in js is a just a function, which returns JSX code.
//props -- its an object that will holds all the received attributes as properties
import "./ExpenseItem.css"; 

function ExpenseItem(props) { 

  return (
    <div className = "expense-item">
      <div>{props.date.toISOString()}</div>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
} 

export default ExpenseItem;
