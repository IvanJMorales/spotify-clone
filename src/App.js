import React, { useEffect } from 'react';
import './App.css';
import Login from "./components/Login.js";
import { getTokenFromUrl } from "./spotify.js"
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player.js';
import { useDataLayerValue } from './DataLayer.js';

const spotify = new SpotifyWebApi(); /*creates an instance of Spotify within app*/

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); /*pull user data from Data Layer*/


  useEffect(() => { /*runs code based on a given conditions*/
    const hash = getTokenFromUrl();
    window.location.hash ="";
    const _token = hash.access_token;

    if (_token) { /*saving the token in state*/
      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);/*gives token to Spotify API*/

      spotify.getMe().then((user) => {
        dispatch({ /*send user data to Data Layer*/
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ /*sends playlist data to Data Layer*/
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcW0pUFHbbhWs')
        .then(response => 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );
    }
  }, []);

  return (
    <div className="App"> {token ?
      <Player spotify={spotify} /> :
      <Login />}
    </div>
  );
}
 

export default App;
