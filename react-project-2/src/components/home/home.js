import React from 'react';
import './home.css';

// import '../../data/data';
import {NewCard} from '../../components/card/card.js';


export class Home extends React.Component{
    render(){

        const currentdate = new Date();
        const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
       
        console.log(currentdate.toLocaleDateString('en-GB',dateOptions));
        const myDate = currentdate.toLocaleDateString('en-GB',dateOptions)
        
        
        return (
            <div className="homepage-wrapper">

                {/* <img src={require('../../assets/linn-park.jpg')} alt="Link Park"/> */}
                
                <div id="header-image">
                    {/* <h2>Home-Header-Image</h2> */}
                   
                </div>
                
                <div id="home-content">
                    
                    <div className="date">
                        <p><span>{myDate}</span></p>
                    </div>

                    <NewCard id="6" /> 
                    <NewCard id="7" />
                    <NewCard id="8" />

                    <NewCard id="3" />
                    <NewCard id="4" />
                    <NewCard id="5" />
                </div>

            </div>
        )
    }
}

export default Home;