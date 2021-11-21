import React, {useState} from 'react'
import "./LoginScreen.css"
import SignUpScreen from './SignUpScreen.js'


function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className="login-screen">
            <div className="login-background">
                <img 
                    src="https://eurovision-quotidien.com/wp-content/uploads/2018/06/Logo-Netflix.png" 
                    alt="" 
                    className="loginScreen-logo"
                    />
                <button className="login-button" onClick={() => setSignIn(true)}>Sign in</button>
                <div className="login-gradient"></div>

                <div className="login-body">
                    {signIn ? 
                        <SignUpScreen />
                    :
                    (
                    <>
                        <h1>Unlimited films, Tv programmes and more</h1>
                        <h2>watch anywhere. Cancel anytime</h2>
                        <h4>Readt to watch? Enter your email to create or restart your membership</h4>
                        <div className="loginScreen-input">
                            <form>
                                <input type="input" className="" placeholder="Email Address"/>
                                <button 
                                onClick={() =>setSignIn(true)}className="loginScreen-getStarted">get started</button>
                            </form>
                        </div>
                    </>

                    )} 

                </div>
            </div>
        </div>
    )
}

export default LoginScreen
