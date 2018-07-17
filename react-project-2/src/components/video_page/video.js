import React from 'react';
import './video.css';



import { Link } from 'react-router-dom';

export class Video extends React.Component{
    render(){
        return (
            <div className="video-page-wrapper">               
               
                <li><Link to='/slideshow'>Show Gallery</Link></li>

                <div className="video-container">
                    "Video Goes Here"
                </div>

                <div className='video-description'>

                <h2>Title</h2>
                <p>Description :</p>
                <p>Posted :</p>
                <p>Runtime :</p>
                <p>Tags :</p>
                </div>
               
            </div>
        )
    }
}

export default Video;