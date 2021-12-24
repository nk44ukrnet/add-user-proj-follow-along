import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import {useState, useRef} from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {

    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [error, setError] = useState();

    function addUserHandler(e) {
        e.preventDefault();
        const enteredName = nameInputRef.current.value,
            enteredUserAge = ageInputRef.current.value;
        if (
            enteredName.trim().length === 0
            || enteredUserAge.trim().length === 0
        ) {
            setError({
                title: 'Invalid input',
                message: 'Please, enter a valid Name and age (non-empty values).'
            })
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please, enter a valid Age (> 0).'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }


    function errorHandler() {
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
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age in years:</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}