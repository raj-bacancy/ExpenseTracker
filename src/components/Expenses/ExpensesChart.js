import Chart from "../Chart/Chart";

const ExpensesChat = (props) => {
  const datapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nev", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses){
      const expMonth = expense.date.getMonth();
      datapoints[expMonth].value += expense.amount;
  }
  return <Chart datapoints={datapoints}/>;
};
export default ExpensesChat;
