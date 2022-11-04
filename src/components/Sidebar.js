import React from "react";
import "../styles/Sidebar.css";
import SpotifyEmblem from "../images/SpotifyEmblem.jpg";
import SidebarOption from "./SidebarOption.js"
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src= { SpotifyEmblem }/>
            <SidebarOption Icon={ HomeIcon } title="Home"/>
            <SidebarOption Icon={ SearchIcon } title="Search"/>
            <SidebarOption Icon={ LibraryMusicIcon } title="Your Library"/>

            <br />
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map((playlist) => ( /*map through playlists from Spotify*/
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    );
}

export default Sidebar

