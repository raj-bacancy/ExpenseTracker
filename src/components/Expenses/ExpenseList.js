import ExpenseItem from "./Expenseitem";
import "./ExpenseList.css";
const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} />
      ))}
    </ul>
  );
};
export default ExpenseList;
