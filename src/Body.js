import React from "react";
import Header from "./Header.js";
import SongRow from './SongRow.js';
import "./Body.css";
import { useDataLayerValue } from "./DataLayer.js";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";


function Body({ spotify }) {

    const [{discover_weekly}, dispatch] = useDataLayerValue()
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body