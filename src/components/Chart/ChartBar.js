import "./ChartBar.css";
const ChartBar = (props) => {
  let BarFillHight = "0%";
  if (props.maxvalue > 0) {
    BarFillHight = Math.round((props.value / props.maxvalue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height : BarFillHight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
