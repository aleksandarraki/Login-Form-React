import { useState } from "react";
import "./Form.css"



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
                <div >
                    <input type="text" placeholder="username" className="username" onChange={usernameHandler} value={username}></input>
                </div>
                <div >
                    <input type="text" placeholder="password" className="password" onChange={passwordHandler} value={password}></input>
                </div>
                <div >
                    <button id="login" className="login" onClick={onSubmit}>login</button>
                </div>
                <div >
                    <button id="reset" className="reset" onClick={onReset}>reset</button>
                </div>
            </div>

        </div>
    )
}