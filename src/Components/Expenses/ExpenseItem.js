import React, { useState, useEffect } from "react";
import "./ExpenseItem.css";
import ExpenseDtae from "./ExpenseDate";
import Card from "../Card/Card";
function ExpenseItem({ Item, deleteItem }) {
  const deleted = () => {
    deleteItem(Item.sno);
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDtae date={Item.date}></ExpenseDtae>

        <div className="expense-item__description">
          <h2>{Item.title}</h2>
        </div>
        <div className="expense-item__price">{Item.amount}</div>
        <button className="btn btn-danger" onClick={deleted}>
          Delete
        </button>
        <button className="btn btn-danger" onClick={deleted}>
          Edit
        </button>
      </Card>
    </>
  );
}

export default ExpenseItem;
