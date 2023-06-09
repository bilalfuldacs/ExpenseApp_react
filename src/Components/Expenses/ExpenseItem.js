import React from "react";
import "./ExpenseItem.css";
import ExpenseDtae from "./ExpenseDate";
import Card from "./Card";
function ExpenseItem(props) {
  return (
    <>
      {props.Item.map((item) => {
        return (
          <Card className="expense-item">
            <ExpenseDtae date={item.date}></ExpenseDtae>

            <div className="expense-item__description">
              <h2>{item.title}</h2>
            </div>
            <div className="expense-item__price">{item.amount}</div>
          </Card>
        );
      })}
    </>
  );
}

export default ExpenseItem;
