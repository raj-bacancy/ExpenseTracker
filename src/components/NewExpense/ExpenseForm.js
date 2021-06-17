import React, { useState } from "react";
import "./ExpenseForm.css";
import Axios from "axios";
function ExpenseForm(props) {
  const [enteredTitle, setEnterdeTitle] = useState("");
  const [enteredAmount, setEnterdeAmount] = useState("");
  const [enteredDate, setEnterdeDate] = useState("");

  function titleChangeHandler(event) {
    setEnterdeTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnterdeAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnterdeDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    Axios.post("http://localhost:3000/saveExpense", { expenseData })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    props.onNewExpense(expenseData);
    setEnterdeTitle("");
    setEnterdeAmount("");
    setEnterdeDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
