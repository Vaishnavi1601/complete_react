//component in js is a just a function, which returns JSX code.
//props -- its an object that will holds all the received attributes as properties
import "./ExpenseItem.css"; 

function ExpenseItem(props) { 

  const month = props.date.toLocaleString('en-US', {month: 'long'} )
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', {day: '2-digit'}   )



  return (
    <div className = "expense-item">
      <div>

      <div> {month} </div>

      <div>{year}</div>

      <div>{day}</div>

      </div>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        <div className = "expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
} 

export default ExpenseItem;
