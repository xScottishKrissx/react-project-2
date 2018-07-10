import React from 'react';
import './body.css';

import Video  from '../../components/video_page/video';
import Slideshow  from '../../components/slideshow/slideshow';

import { Link, Route, Switch } from 'react-router-dom';

export class Body extends React.Component{
    render(){
        return (

            <div className="body-wrapper">

            <ul>        
                <li><Link to='/video'>Show Video</Link></li>
                <li><Link to='/slideshow'>Show Slideshow</Link></li>
            </ul>
        
            
            <Route path="/video" component={Video} />
            <Route path="/slideshow" component={Slideshow} />
            </div>
        )
    }
}

export default Body;