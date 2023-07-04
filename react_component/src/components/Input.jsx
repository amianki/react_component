const Input = (props) => {
    return (
        <div>
            <label style={{color:"red"}} >{props.labelText} </label>
            <input className="inputBox" placeholder={props.inputPlaceholder} type={props.inputType}/>

        </div>
    );
}







export default Input;