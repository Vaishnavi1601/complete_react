//component in js is a just a function, which returns JSX code.

import "./ExpenseItem.css"; 

function ExpenseItem() {
  return (
    <div className = "expense-item">
      <div>December 5 , 2021</div>
      <div className = "expense-item__description">
        <h2>Car Insurance</h2>
        <div className = "expense-item__price">$28.54</div>
      </div>
    </div>
  );
} 

export default ExpenseItem;
