import React from 'react'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

import { signOut } from "firebase/auth";
import { auth } from '../firebase';

import './ProfileScreen.css'

function ProfileScreen() {
    const use = useSelector(selectUser)

    const signout = ()=> {
        signOut(auth).then(() => {
              use = null;
        }).catch((error) => {
              // An error happened.
        })
    }
    return (
        <div className="profile-screen">
            <Nav />
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profileScreen-info">
                    <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />

                    <div className="profileScreen-details">
                        <h2>{use.email}</h2>

                        <div className="profileScreen-plans">
                            <h3>Plans</h3>
                            <p></p>
                        </div>

                        <button
                        onClick={signout}
                        className="profileScreen-out">sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
