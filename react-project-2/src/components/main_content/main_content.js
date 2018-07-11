import React from 'react';
import './main_content.css';

import Home from '../../components/home/home';

import {Route} from 'react-router-dom';
import  Feature from '../feature/feature';
import  About from '../about/about';

import Video  from '../../components/video_page/video';
import Slideshow  from '../../components/slideshow/slideshow';

export class MainContent extends React.Component{
    render(){
        return (
            <div className="main-wrapper">
                

            {/* <Switch> */}
                <Route path="/home" component={Home} />

                <Route path="/feature" component={Feature} />   
                <Route path="/video" component={Video} />
                <Route path="/slideshow" component={Slideshow} />

                <Route path="/about" component={About} />
            {/* </Switch> */}


            {/* <Route path="/video" component={Video} />
            <Route path="/slideshow" component={Slideshow} /> */}
            </div>
        )
    }
}

export default MainContent;
