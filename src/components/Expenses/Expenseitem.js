import React from "react";

import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
function Expenseitem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate expensedate={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
}

export default Expenseitem;
