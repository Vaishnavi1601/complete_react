//component in js is a just a function, which returns JSX code.
//props -- its an object that will holds all the received attributes as properties
import React,{ useState } from "react";
import "./ExpenseItem.css"; 
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props)=> { 

  //array destructing
  // 1st variable have the current title
  // 2nd elemrnt is the function to update that title
  const [title, setTitle]= useState(props.title);
  
  const clickHandler   = () =>{
    setTitle('Updated')
    console.log(title)
  } 
   
  return (
    <Card className = "expense-item">
      <ExpenseDate date= {props.date}/>
      <div className = "expense-item__description">
        <h2>{ props.title}</h2> 
        <div className = "expense-item__price">${props.amount}</div>
     
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );   
} 
export default ExpenseItem;


