import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
    const [usersList, setUsersList] = useState([]);

    function addUserHandler(uName, uAge) {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    name: uName,
                    age: uAge,
                    id: Math.random() + new Date().getDate() + '',
                },
            ]
        })
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    )
}

export default App;
