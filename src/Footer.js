import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleIcon from "@material-ui/icons/ShuffleOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlayOutlined";
import VolumeDownIcon from "@material-ui/icons/VolumeDownOutlined";


function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="" alt=""/>
                <div className="footer_songInfo">
                    <h3>YEAH</h3>
                    <p>YEAH</p>
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontsize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>

            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer