import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import { useState } from "react";
import ExpenseData from "./Components/Expenses/ExpenseData";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const [ExpenseItems, SetExpenseItems] = useState(ExpenseData);
  //const [filteryear, setfilteryear] = useState(ExpenseData);
  const [totaldata, settotaldata] = useState(ExpenseData);

  const addExpense = (data) => {
    console.log(data);
    settotaldata([...totaldata, data]);
    SetExpenseItems([...totaldata, data]);
    //setfilteryear([...totaldata, data]);

    //console.log(givenDate);
    // let array = [...totaldata, data];
    // console.log(array);
  };
  const dateFilter = (year) => {
    const filteredData = totaldata.filter((item) => {
      return item.date.getFullYear().toString() === year;
    });

    SetExpenseItems(filteredData);
  };
  const deleteItem = (data) => {
    console.log(data);
    const filteredData = totaldata.filter((item) => {
      return item.sno !== data;
    });

    SetExpenseItems(filteredData);
    // setfilteryear(filteredData);
    settotaldata(filteredData);
  };
  return (
    <div className="">
      <NewExpense onData={addExpense} />
      <Expenses
        dateFilter={dateFilter}
        deleteItem={deleteItem}
        Item={ExpenseItems}
      />
    </div>
  );
}

export default App;
