import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { title, amount, date } = props;

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
