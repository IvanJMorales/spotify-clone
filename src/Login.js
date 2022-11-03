import React from 'react';
import './Login.css';
import spotifylogo from './images/spotifylogo.jpg';
import { loginUrl } from "./spotify.js" /*curly braces to import variables*/

function Login() {
    return (
        <div className="login">
            <img src={spotifylogo}/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    );
}

export default Login;