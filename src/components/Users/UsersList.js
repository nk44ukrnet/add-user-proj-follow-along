import classes from './UsersList.module.css'
import Card from "../UI/Card";

export default function UsersList(props) {

    return (
        <Card className={classes.users}>
            {props.users.length > 0 && <ul>
                {props.users.map(user => {
                    return <li key={user.id}>{user.name} ({user.age} years old)</li>
                })}
            </ul>}
        </Card>
    )
}