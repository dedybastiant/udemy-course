import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName === "") {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age (> 0).",
      });
      return;
    }

    const userData = {
      id: new Date().toISOString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveData(userData);
    setEnteredName("");
    setEnteredAge(0);
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onModalClose={closeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button>Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
