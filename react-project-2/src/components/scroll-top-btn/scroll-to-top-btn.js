import React from 'react';
import '../scroll-top-btn/scroll-to-top-btn.css';

export class ScrollToTopBtn extends React.Component{

    goHome(){
        window.scroll({
            top: 0,
            behavior:'smooth'
        });
    };

    // componentDidMount(){
    //     const body = document.body;
    //     const html = document.documentElement;
    //     const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     console.log(height);


    //     const btnLocation = document.getElementById('scrollBtn');
    //     console.log(btnLocation.scrollHeight);
    // }
    render(){


        return <button id="scrollBtn" className="scroll-to-top-btn" onClick={this.goHome}>To the Top!!</button>;
    }
}
// const f = window.scroll({top:0, behavior:'smooth'})
// export const ScrollTopBtn = (props) => {
//     // goHome(){
//     //     window.scroll({
//     //         top: 0,
//     //         behavior:'smooth'
//     //     });
//     // }
    
//     return(<button onClick={f} className="scroll-to-top-btn">Top</button>)
// }

export default ScrollToTopBtn;