
const ConfirmationBar = (props) => {

    return(
        <div className="confirm-bar">
            <p>Are you Sure</p>
            <div className="confirm-buttons">
                <button onClick={props.onClickCancel} >Cancel</button>
                <button onClick={props.onClickCancel} >Confirm</button>
            </div>
            
        </div>
    )
}

export default ConfirmationBar