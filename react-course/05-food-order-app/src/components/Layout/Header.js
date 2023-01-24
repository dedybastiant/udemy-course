import { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../public/images/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
