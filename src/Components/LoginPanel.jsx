import React, { useState } from "react";

function LoginPanel({ onLogin }) {
    const [fname, setName] = useState({
        fName: "",
        password: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setName(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function login(event) {
        event.preventDefault();
        onLogin(fname.fName);
    }

    return (
        <div className="container">
            <h1>
                Log In ↓
            </h1>
            <form onSubmit={login}>
                <input
                    onChange={handleChange}
                    name="fName"
                    value={fname.fName}
                    placeholder="Login"
                    required
                />
                <input
                    type='password'
                    name="password"
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginPanel;