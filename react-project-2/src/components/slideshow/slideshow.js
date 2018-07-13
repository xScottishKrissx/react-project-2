import React from 'react';
import './slideshow.css';

import {Link} from 'react-router-dom';

import GalleryData from './gallery-data';

export class Slideshow extends React.Component{
    render(){

        



        

        // times (3)(() => console.log('hi'))
        return (
            <div>
                <h1>Slideshow</h1>
                {/* <NewGallery id="1"/> */}
                
                <GalleryLoop />

                {/* <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>

                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>
                
                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>

                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div>
                <div className="gallery-6">Gallery-6</div> */}
                
                <li><Link to='/video'>Show Video</Link></li>
                
            </div>
        )
    }
}

//A loop that I don't understand but certainly looks cool...
// const times = x => f => {
//     if(x > 0){
//         f()
//         times(x - 1) (f)
//     }
// }

// ... a loop that is much more my level.
// ... its also not that useful for me.
// ... i might need to use a .map like i did with the cards.
// ... maybe i could combine the map with the loop.
// ... that seemed to work ok. Now to style it

    const GalleryLoop = (title) => {
        let i;
        let thing = [];
        for(i = 0; i< 9; i++){
            // thing.push( <div key={i} id={i} className="gallery-6">Gallery-6</div> )
            thing.push(<NewGallery id={i} key={i}/>)
        }
        return thing;
    }


const NewGallery = (props) => {
    const galleryData = GalleryData;
    const a = [];
    const s = galleryData[props.id];
    a.push(s);

    const gallery = a.map(arraymap => {
        return (
            <div key={arraymap.id}>
                <div >Gallery-6</div>
            </div>
        )
    })
    return (
            <div className="gallery-6">
                 {gallery}
            </div>
    );
}


export default Slideshow;