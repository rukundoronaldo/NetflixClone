import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import React, {useRef} from 'react'
import "./SignUpScreen.css"

function SignUpScreen() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const regester = (e) => {
        e.preventDefault();

       createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            // Signed in 
            //const user = userCredential.user;
            // ...
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    const SignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign up</h1>
                <input ref={emailRef} type="email" placeholder="email" />
                <input ref={passwordRef} type="password" placeholder="password" />
                <button type="submit" onClick={SignIn} >log in</button>

                <h4 className="h4">
                    <span className="signUpScreen-gray">
                    New to Netflix? </span>
                    <span className="signUpScreen-link" onClick={regester} >Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
