import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Axios from "axios";
let DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  console.log("expenses = " + expenses);
  if (expenses.length === 0) {
    Axios.get("http://localhost:3000/mymethod")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      console.log("expenses2 = " + expenses);
  }

  console.log("456");

  const newExpwnseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onNewExpense={newExpwnseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
