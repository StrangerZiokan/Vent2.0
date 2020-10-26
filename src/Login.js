import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import React from 'react';
import './Login.css';
   //https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/05/Discord-Featured-796x417.jpg    <img alt="VENT things" src="https://drive.google.com/file/d/1EBqbFyarmA8GIM-XMcTQjTa3kRQssvaj/view?usp=sharing" />
function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message)); 
    };

    return (
        <div className="login">
            <h2>On the login Page</h2>
            
            <div className="login__logo">
            <img src="https://i.ibb.co/hy5D9zX/vent2.png" alt="vent2" />        
            </div>

            <Button onClick = {signIn} >Sign IN</Button>
        </div>
    )
}

export default Login;
