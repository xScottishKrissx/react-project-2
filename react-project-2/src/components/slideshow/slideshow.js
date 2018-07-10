import React from 'react';
import './slideshow.css';

import {Link} from 'react-router-dom';

export class Slideshow extends React.Component{
    render(){
        return (
            <div>
                <h1>Slideshow</h1>
                <li><Link to='/video'>Show Video</Link></li>
                
            </div>
        )
    }
}

export default Slideshow;