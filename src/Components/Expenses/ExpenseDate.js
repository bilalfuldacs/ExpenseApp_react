import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  return (
    <div className="expense-date ">
      <div className="expense-date__month ">
        {" "}
        {props.date.toLocaleDateString("en-Us", { month: "long" })}
      </div>
      <div className="expense-date__day ">
        {props.date.toLocaleDateString("en-Us", { day: "2-digit" })}
      </div>
      <div className="expense-date__year ">
        {props.date.getFullYear() || "N/A"}
      </div>
    </div>
  );
}

export default ExpenseDate;
