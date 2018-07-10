import React from 'react';
import './feature.css';

import { Link } from 'react-router-dom';

export class Feature extends React.Component{
    render(){
        return (

            <div className="feature-wrapper">

                <ul>        
                    <li><Link to='/video'>Show Video</Link></li>
                    <li><Link to='/slideshow'>Show Slideshow</Link></li>
                </ul>       



            </div>
        )
    }
}

export default Feature;