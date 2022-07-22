import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import {login, logout, selectUser} from "./features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './Firebase';
import Widgets from './Widgets';

// BEM naming convention


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {

        // user is logged in

        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );

      } else
      {
        // user is logged out
        dispatch(logout());
      }
    });

  },[]);

  return (
    <div className="app">
      {/* Header */}
      <Header/>

      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
        </div>
   
      )}
        {/* Sidebar */}

        {/* Feed */}

        {/* Widgets */}

    </div>

  );

}


export default App;
