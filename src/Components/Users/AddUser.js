import { useState } from "react";
import Button from "../UI/Button";


const AddUser = (props) => {
    //handle state for the name and age.
    const [enteredNameValue, setEnteredNameValue] = useState('');
    const [enteredAgeValue, setEnteredAgeValue] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddUser(enteredNameValue,enteredAgeValue);
        console.log(enteredNameValue,enteredAgeValue);
        
    // props.AddUserHandler(enteredNameValue,enteredAgeValue);
    };

    const nameInputChangeHandler = (event) => {
        setEnteredNameValue(event.target.value);
    };
    
    const ageInputChangeHandler = (event) => {
        setEnteredAgeValue(event.target.value);
    };

    return(
        <div>
        <form onSubmit={formSubmitHandler}>
            <label id="username" htmlFor="name">Add Name:</label>
            <input type="text" value={enteredNameValue} onChange={nameInputChangeHandler} />
            <label id="age" htmlFor="age">Add Age:</label>
            <input type="number" value={enteredAgeValue} onChange={ageInputChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
        </div>
    );

};

export default AddUser;