import React from 'react';
import './gallery-sub-page.css';
import {Link} from 'react-router-dom';

class GallerySubPage extends React.Component{
    // componentWillMount(){
    //     const test = this.props.location.state.test
    //      console.log(test);
    // }
    render(){
        // const pageId = this.props.location.state.pageId;
        const pageText = this.props.location.state.pageText;
        
        const pageTitle = this.props.location.state.pageTitle;
        const pageAuthor = this.props.location.state.pageAuthor;
        const pageLikes = this.props.location.state.pageLikes;
        const pageDislikes = this.props.location.state.pageDislikes;
        // const pageDate = this.props.location.state.pageDate;
        const style = this.props.location.state.pageImage;

        return(
            <div className="gallery-sub-page-wrapper">
            <li><Link to='/slideshow'>go back...</Link></li>
                <div className="sub-page-header" style={style}>
                   
                </div>
                <h1>{pageTitle}</h1>

                <div className="sub-page-content"> 
                    
                    <h3>posted by {pageAuthor}</h3>
                    {/* <span>posted {pageDate}</span> */}
                    <p className="sub-page-text">{pageText}</p>
                    <p className="sub-page-score"> Likes: {pageLikes} </p>
                    <p className="sub-page-score"> Dislikes: {pageDislikes} </p>
                </div>
            </div>
        )
    }
}

export default GallerySubPage;