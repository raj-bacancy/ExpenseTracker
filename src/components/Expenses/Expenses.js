import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChat from "./ExpensesChart";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const changeExpenseFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  //const FilteredExpenses = props.items;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onExpenseFilter={changeExpenseFilterHandler}
        />

        <ExpensesChat expenses={FilteredExpenses} />
        <ExpenseList items={FilteredExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
