import React, { useState } from "react";
import "./Form.css";
import Button from "./Button";

const Form = (props) => {
    const [enteredName, setEnteredName] = useState("");

    const [enteredMail, setEnteredMail] = useState("");

    const [enteredAge, setEnteredAge] = useState("");

    const [enteredGender, setEnteredGender] = useState("");

    const [enteredMaritalStatus, setEnteredMaritalStatus] = useState("");

    const data = {
        userName: enteredName,
        userMail: enteredMail,
        userAge: enteredAge,
        userGender: enteredGender,
        userMaritalStatus: enteredMaritalStatus,
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(data);
        props.onAddData(
            enteredName,
            enteredMail,
            enteredAge,
            enteredGender,
            enteredMaritalStatus
        );
        setEnteredName("");
        setEnteredMail("");
        setEnteredAge("");
        setEnteredGender("");
    };

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const mailHandler = (event) => {
        setEnteredMail(event.target.value);
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const genderHandler = (event) => {
        setEnteredGender(event.target.value);
    };

    const maritalStatusHandler = (event) => {
        setEnteredMaritalStatus(event.target.value);
    };

    return (
        <div className="form-container">
            <form action="" className="form" onSubmit={formSubmitHandler}>
                {/* Name Field */}

                <div className="input-field name">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Full Name"
                        onChange={nameHandler}
                        value={enteredName}
                    />
                </div>

                {/* Email field*/}

                <div className="input-field email">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        onChange={mailHandler}
                        value={enteredMail}
                    />
                </div>

                {/* Age */}

                <div className="input-field age">
                    <label htmlFor="">Age</label>
                    <input
                        type="number"
                        name=""
                        id=""
                        placeholder="Age"
                        onChange={ageHandler}
                        value={enteredAge}
                    />
                </div>

                {/* Gender */}

                <div className="input-field gender">
                    <label htmlFor="">Gender</label>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Male/Female"
                        onChange={genderHandler}
                        value={enteredGender}
                    />
                </div>

                {/* Marital Status */}

                <div className="input-field marital-status">
                    <label htmlFor="">Marital Status</label>
                    <select name="" id="" onClick={maritalStatusHandler}>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                </div>

                {/* Button */}

                <Button />
            </form>
        </div>
    );
};

export default Form;
