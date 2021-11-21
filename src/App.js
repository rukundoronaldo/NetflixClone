import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import Login from './screens/LoginScreen'
import {Switch,Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import {useDispatch, useSelector } from 'react-redux'
import {logout,login, selectUser } from './features/userSlice'


export default function App() {
  const user = useSelector(selectUser)

  const unsubscribed = () => {

  }

  const dispatch = useDispatch()
  

  useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            dispatch(login({
              uid: user.uid,
              email: user.email
            }))
          } else {
            dispatch(logout())
          }
        });
        return () => unsubscribed()
  }, [dispatch])
  return (
    <div className="App">
      {
        !user ? (
        <Login />
        )
        :
        (
        <Switch>
            <Route exact path="/"><HomeScreen /></Route>
            <Route path="/profile" ><ProfileScreen /></Route>
        </Switch>
        )
      }
      
    </div>
  );
}


