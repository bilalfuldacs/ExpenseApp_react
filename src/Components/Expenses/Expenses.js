import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem Item={props.Item} />;
    </Card>
  );
}

export default Expenses;
