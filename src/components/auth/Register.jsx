import React, {useState} from "react";
// import firebase from "../../Firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Register(){
    const [userRegister, setUserRegister] = useState({
        username: "",
        email: "",
        password: ""
    });
    return(
        <div>
            <h1>Sign Up</h1>
            <form>
                <input type="text" id="username" name="username" placeholder="Username" />
                <input type="text" id="email" name="email" placeholder="Email" />
                <input type="text" id="password" name="password" placeholder="Password" />
                <button type="submit" id="signUp" name="signup_submit" value="Sign Up" >Login</button>
            </form>
            <div>
                <span>Sign In With<br/>Social Media</span>
                <button>Login With Gmail</button>
            </div>
        </div>
    )
}