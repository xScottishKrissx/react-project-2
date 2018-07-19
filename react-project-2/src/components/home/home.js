import React from 'react';
import './home.css';

// import '../../data/data';
import {NewCard} from '../../components/card/card.js';
import { Carousel } from '../carousel/carousel';


export class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            timeExists: true
        }
    }
    render(){
        

        
        

        return (
            <div className="homepage-wrapper">

                {/* <img src={require('../../assets/linn-park.jpg')} alt="Link Park"/> */}
                
                <div id="header-image">
                    {/* <h2>Home-Header-Image</h2> */}
                    {/* <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/">  */}

                    <Carousel />
                    
                   
                </div>
                
                <div id="home-content">
                    
                    <div className="date">
                        <p>
                            <span id="test">
                                <GetTodaysDate />
                            </span>
                        </p>
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

    componentDidMount(){
        const getthing = document.getElementById('test').innerHTML;
        if(getthing != null){
            // console.log("not empty")
            this.setState ({timeExists:true})
        }else{
            // console.log("empty");
        }
        
    }
}




export default Home;

const GetTodaysDate = () =>{
    const currentdate = new Date();
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
   
    // console.log(currentdate.toLocaleDateString('en-GB',dateOptions)); 
    const myDate = currentdate.toLocaleDateString('en-GB',dateOptions);


    return "brand new for " + myDate;
    // return {myDate} is wrong.
}