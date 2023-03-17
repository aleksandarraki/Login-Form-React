import { useState } from "react";



export const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = () => {
        alert(
            `My username: ${username}
            My password: ${password}`
        )
    };

    const onReset = () => {
        setUsername("");
        setPassword("");
    }


    return (
        <div className="main">
            <div className="form-container">
                <h1>Login</h1>
                <div className="username">
                    <input type="text" placeholder="username" onChange={usernameHandler} value={username}></input>
                </div>
                <div className="password">
                    <input type="text" placeholder="password" onChange={passwordHandler} value={password}></input>
                </div>
                <div className="login">
                    <button id="login" onClick={onSubmit}>Login</button>
                </div>
                <div className="reset">
                    <button id="reset" onClick={onReset}>Reset</button>
                </div>
            </div>

        </div>
    )
}