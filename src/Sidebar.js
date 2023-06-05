import { Avatar } from "@mui/material";
import React from "react";
import './Sidebar.css';


function Sidebar(){

    const recentItem = (topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
        
    )

    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://wallpapertag.com/wallpaper/full/7/3/2/154689-cool-coding-background-1920x1280-for-tablet.jpg" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Aayush Kackkwaha</h2>
                <h4>aayushk2609@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">456</p>
                </div>

                <div className="sidebar__stat">
                    <p>Viewed on post</p>
                    <p className="sidebar__statNumber">4567</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem('Programming')}
                {recentItem('Softwareengineering')}
                {recentItem('Design')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}
export default Sidebar