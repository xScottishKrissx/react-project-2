import React from 'react';
import './header.css';

// import Home from '../../components/home/home';

import { Link } from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return (
            <div>
                <h2>Nav</h2>
                <nav>
                    <ul>

                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/feature">Feature</Link></li>
                        <li><Link to="/about">About</Link></li>
                        

                    </ul>    
                </nav>

                {/* <Route path="/home" component={Home} /> */}
            </div>
        )
    }
}

export default Header;