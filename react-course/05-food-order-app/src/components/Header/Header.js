import classes from "./Header.module.css";
import mealImage from "../../public/images/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="meals" />
      </div>
    </header>
  );
};

export default Header;
