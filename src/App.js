import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses";
function App() {
  const ExpenseItems = [
    { date: new Date(2023, 2, 28), title: "car expense", amount: "$250" },
    { date: new Date(2023, 2, 28), title: "car expense", amount: "$250" },
    { date: new Date(2023, 2, 28), title: "car expense", amount: "$250" },
  ];

  return (
    <div className="">
      <Expenses Item={ExpenseItems} />;
    </div>
  );
}

export default App;
