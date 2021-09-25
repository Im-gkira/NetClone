import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={process.env.PUBLIC_URL + "/media/logo.svg"}/>
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1> Unlimited Anime shows, movies and more</h1>
                <h2> Watch anywhere, Watch anytime</h2>
                <p>Ready to Watch? Enter your email to start watching</p>
                <div className="input">
                    <input type="email" placeholder="Enter Your Email Here"/>
                    <button className="RegisterButton">Get Started</button>
                </div>
            </div>
        </div>
    )

}

export default Register