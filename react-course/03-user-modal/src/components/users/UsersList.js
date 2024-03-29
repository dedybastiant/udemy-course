import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  const { users } = props;
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
