import React from 'react';
import './footer.css';
import ScrollToTopBtn from '../scroll-top-btn/scroll-to-top-btn';
// import {ScrollTopBtn} from '../scroll-top-btn/scroll-to-top-btn';

export class Footer extends React.Component{
    render(){
        return(
        <div className="footer-wrapper">
            <div className="im-a-lazy-dev">
               <div className="col footer-brand">
                   <p className="brand">christopher dunne</p>
                </div>

                <div className="col footer-brand">
                   <ul>
                       <li>Home</li>
                       <li>Feature</li>
                       <li>About</li>
                   </ul>
                </div>

                <div className="col footer-brand">
                   <ul>
                       <li>[ICON]Email</li>
                       <li>[ICON]Portfolio</li>
                       <li>[ICON]Github</li>
                   </ul>
                </div>
                </div>
                <ScrollToTopBtn />
                {/* <ScrollTopBtn /> */}
            </div>    
        )
    }
}

export default Footer;