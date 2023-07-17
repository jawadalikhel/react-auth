import React from "react";

export default function Login(){
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" id="email" name="email" placeholder="Email" />
                <input type="text" id="password" name="password" placeholder="Password" />
                <button type="submit" id="saveData" name="signup_submit" value="remove" >Login</button>
            </form>
        </div>
    )
}