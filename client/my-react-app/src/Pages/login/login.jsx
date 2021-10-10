import "./login.scss"

const Login= () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={process.env.PUBLIC_URL + "/media/logo.svg"}/>
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email/Phone Number"/>
                    <input type="password" placeholder="password"/>
                    <button className="loginButton"> Sign In</button>
                    <span> New to NetClone? <b>Sign Up Now</b></span>
                    <small>
                        This Page is Protected by Google reCAPTCHA to ensure you ain't bot.
                        <b>learn more</b>
                    </small>
                </form>
            </div>
        </div>
)

}

export default Login