import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    function addUserHandler(e) {
        e.preventDefault();
        if (
            enteredUsername.trim().length === 0
            || enteredAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please, enter a valid Name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please, enter a valid Age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    function usernameChangeHandler(e) {
        setEnteredUsername(e.target.value);
    }

    function ageChangeHandler(e) {
        setEnteredAge(e.target.value);
    }

    function errorHandler(){
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal
                onConfirm={errorHandler}
                title={error.title}
                message={error.message}
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username:</label>
                    <input id="username" value={enteredUsername} onChange={usernameChangeHandler} type="text"/>
                    <label htmlFor="age">Age in years:</label>
                    <input id="age" value={enteredAge} onChange={ageChangeHandler} type="number"/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}