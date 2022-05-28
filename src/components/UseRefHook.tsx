import React, { useEffect, useRef } from "react";
import Input from "./Input"; // new

const UseRefHook = () => {
    // Creating refs for username and password
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    // We are also creating a reference to the Login button
    const submitBtnRef = useRef<HTMLButtonElement>(null);

    // useEffect to set the initial focus to the user name input
    useEffect(() => {
        userNameRef.current?.focus();
    }, []);

    // This function is used to handle the key press.
    // Whenever user hits enter it moves to the next element
    const handleKeyPress = (e: KeyboardEvent, inputType: string) => {
        if (e.key === "Enter") {
            switch (inputType) {
                // Checks if Enter pressed from the username field?
                case "username":
                    // Moves the focus to the password input field
                    passwordRef.current?.focus();
                    break;
                // Checks if Enter pressed from the password field?
                case "password":
                    // Moves the focus to the submit button
                    submitBtnRef.current?.focus();
                    e.preventDefault();
                    break;
                default:
                    break;
            }
        }
    };

    // Function to handle the submit click from the button
    const handleSubmit = () => {
        alert("submitted");
    };


    return (
        <div >
            <h2>Example for using useRef Hook</h2>
            <h3>Login</h3>
            {/* New. Using the Component instead of input element */}
            <Input
                type="text"
                name="username"
                ref={userNameRef}
                onKeyDown={(e: KeyboardEvent) => handleKeyPress(e, "username")}
            />
            {/* New. Using the Component instead of input element */}
            <Input
                type="password"
                name="password"
                ref={passwordRef}
                onKeyDown={(e: KeyboardEvent) => handleKeyPress(e, "password")}
            />
            <button ref={submitBtnRef} onClick={handleSubmit}>
                Login
            </button>
        </div>
    );
};

export default UseRefHook;