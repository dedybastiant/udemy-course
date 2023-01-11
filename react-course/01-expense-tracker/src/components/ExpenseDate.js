import "./ExpenseDate.css";

function ExpenseDate(props) {
  const { date } = props;

  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {date.toLocaleString("en-us", { month: "long" })}
      </div>
      <div className="expense-date__year">
        {date.toLocaleString("en-us", { year: "numeric" })}
      </div>
      <div className="expense-date__day">
        {date.toLocaleString("en-us", { day: "2-digit" })}
      </div>
    </div>
  );
}

export default ExpenseDate;
