import { useState } from "react";
import GreyBackground from "./GreyBackground"
import ConfirmationBar from "./ConfirmationBar"

function Todo(props){

    const ConfirmDelete = () =>{
        setBarState(true);
        console.log(barState)
    }

    const CloseDeleteBar = () =>{
        setBarState(false);
    }
    const [barState, setBarState] =useState(false);
    return(
        
        <div className="todos"> 
            <p>{props.text}</p>
            <button onClick={ConfirmDelete}>Delete</button>
            {barState ? <ConfirmationBar onClickCancel={CloseDeleteBar}/> : null}
            {barState ? <GreyBackground onClickDeleteGrey={CloseDeleteBar}/> : null}

        </div>
    )

}

export default Todo