import React from "react";
import Input from "./Input";

export default function Form(props){
    console.log(props.userIsRegistered, "<--- props")
    return(
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            
            {props.userIsRegistered === false ? <Input type="password" placeholder=" Confirm Password"/> : null}

            <button type="submit">{props.userIsRegistered === true ? "Login" : "Register"}</button>
            
      </form>
    )
}