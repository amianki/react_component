import Input from "./Input";
const Login = () => {
    return (
        <form className="">
            <Input
                labelText="ID"
                inputPlaceholder="Enter ID"
                inputType = "text"
            />
            <Input
                labelText="Password"
                inputPlaceholder="Enter Password"
                inputType = "password"
            />

            <button type="submit">Submit</button>
        </form>
    ); 
}

export default Login;