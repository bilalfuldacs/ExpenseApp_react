import React, { useState } from "react";
import "./NewExpenseCss.css";
function NewExpenseForm({ onData }) {
  const [userInput, setUserInput] = useState([]);
  const [title, setTitle] = useState([]);
  const [amount, setAmount] = useState([]);
  const [date, setDate] = useState([]);
  const [sno, setSno] = useState([]);
  //   const [userInput, setUserInput] = useState({
  //     title: "", // anouther way of doing stuff, create one state object by passing key value pairs
  //     amount: " ",
  //     date: "",
  //   });
  const titleHandler = (event) => {
    setTitle(event.target.value);
    //setUserInput({ ...userInput, title: event.target.value });//another way of doing things, yu can use one state instead of three states to manage your work
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      sno: Math.random(),
      date: new Date(date),
      title: title,
      amount: amount,
    };
    //console.log(data);
    setDate(" ");
    setAmount(" ");
    setTitle(" ");
    onData(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={dateHandler}></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default NewExpenseForm;
