import classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={`${classes.card} ${props.className ? props.className : null}`}
    >
      {props.children}
    </div>
  );
}

export default Card;
