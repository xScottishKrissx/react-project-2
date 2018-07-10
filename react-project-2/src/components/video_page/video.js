import React from 'react';
import './video.css';



import { Link } from 'react-router-dom';

export class Video extends React.Component{
    render(){
        return (
            <div>               
                <h1>Video</h1>
                <li><Link to='/slideshow'>Show Slideshow</Link></li>
            </div>
        )
    }
}

export default Video;