import "./register.scss"
import {useRef, useState} from "react";

const Register = () => {
    const [email, setEmail] = useState("")
    const emailRef = useRef()
    const [password, setPassword] = useState("")
    const passRef = useRef()
    const handleEmail = () => {
        setEmail(emailRef.current.value)
    }
    const handlePass = () => {
        setPassword(passRef.current.value)
    }
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

                {!email ? (
                        <div className="input">
                            <input type="email" placeholder="Enter Your Email Here" ref={emailRef}/>
                            <button className="RegisterButton" onClick={handleEmail}>Get Started</button>
                        </div>) :
                    (
                        <form className="input">
                            <input type="Password" placeholder="Password" ref={passRef}/>
                            <button className="RegisterButton" onClick={handlePass}>Start</button>
                        </form>)
                }

            </div>
        </div>
    )

}

export default Register