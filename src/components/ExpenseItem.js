//component in js is a just a function, which returns JSX code.

function ExpenseItem() {
  return (
    <div>
      <div>December 5 , 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$28.54</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
