import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      {props.users.map((userinfo) => {
        return (
          <p key={userinfo.id}>
            {userinfo.name}({userinfo.age} years age)
          </p>
        );
      })}
    </Card>
  );
};
export default UserList;
