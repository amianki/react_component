const Login = () => {
    return (
        <form className="">
            <label htmlFor="ID">ID</label>
            <input type="text" placeholder="Enter Id"></input><br />
            <label htmlFor="Password" >Password</label>
            <input type="text" placeholder="Enter password"></input><br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;