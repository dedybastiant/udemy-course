import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isFormShown, setIsFormShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
  };

  const showFormHandler = (event) => {
    event.preventDefault();
    setIsFormShown((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {isFormShown ? (
        <ExpenseForm onCancelForm={showFormHandler} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
