import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesFilter dateFilter={props.dateFilter} />
      {/*   */}
      {/* {props.Item.length > 0 &&
        props.Item.map((Item) => {
          return (
            <ExpenseItem
              key={Item.sno}
              Item={Item}
              deleteItem={props.deleteItem}
            />
          ); it is another way of rendering confitions using and operator
        })} */}
      {props.Item.length === 0 ? (
        <h1>No Items Found</h1>
      ) : (
        props.Item.map((Item) => {
          return (
            <ExpenseItem
              key={Item.sno}
              Item={Item}
              deleteItem={props.deleteItem}
            />
          );
        })
      )}
    </Card>
  );
}

export default Expenses;
