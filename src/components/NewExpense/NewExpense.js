import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";


function NewExpense(props) {
  const [showform, setShowForm] = useState(false);

  const newExpenseHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expense);
    setShowForm(false);
  };

  const showformhandler = () => {
    
    setShowForm(true);
  };

  const closeformhandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showform && <button onClick={showformhandler}>Add New Expense</button>}
      {showform && (
        <ExpenseForm
          onNewExpense={newExpenseHandler}
          onCancle={closeformhandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
