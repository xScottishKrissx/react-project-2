import React from 'react';
import './card.css';
import RandomAuthorImage from '../random-image/random-image';
import HandleLike from './handle-like';

import Data from  '../card/data/data.js';
export const NewCard = (props) => {

    const newData = Data;    
    const newCardArray = [];
    const newSingleCard =  newData[props.id];
    newCardArray.push(newSingleCard);

    const newDataList = newCardArray.map(newcarddata => {  
        return(
            <div key={newcarddata.id} id={newcarddata.id} className="card">
            
                {/* The random image is made random using numerical ID of each card 
                    This is down to the way the website I am using serves their random images.
                */}
                
                <GetRandomHeaderImage id={newcarddata.id}/>

                <p className="title" >{newcarddata.title}</p>  
                <p className="text">{newcarddata.text}</p>

                <div className="postInfo">

                    <div className="author" >
                    {/* 
                    Temp disabled this because it is causing an error
                    that i'm not sure how to fix at the moment
                     */}
                        {/* <RandomAuthorImage key={newcarddata.id}/>                         */}
                        <p className="author-name" >{newcarddata.author}</p>
                        <p className="post-date" >{newcarddata.post_date}</p>                        
                    </div>

                    <HandleLike  
                        carddataid={newcarddata.id}                             
                        dislikes={newcarddata.dislikes}
                        likes={newcarddata.likes}
                    />  

                </div>
                
            </div>
        )
    });

    return (
        <div className="cardWrapper">         
            {newDataList}
        </div>   
    ) ;
}



const GetRandomHeaderImage = ({id}) => {
    return <img src={"https://unsplash.it/500/200?random=" + id} alt="random_image" />;
}

// export default NewCard;