import React,{useState} from "react";
import Input from "./Input";

export default function Form(props){

    const [isMouseOver, setIsMouseOver] = useState(false);

    function handleMouseOver(){
        console.log("Mouse over the button")
        setIsMouseOver(true);
    }

    function handleMouseOut(){
        setIsMouseOver(false);  
    }
    return(
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            
            {props.userIsRegistered === false ? <Input type="password" placeholder=" Confirm Password"/> : null}

            <button type="submit" 
                id="submitBtn" 
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
                style={{backgroundColor: isMouseOver ? "black" : "white"}}
            >
                
                {props.userIsRegistered === true ? "Login" : "Register"}
            </button>
            
      </form>
    )
}