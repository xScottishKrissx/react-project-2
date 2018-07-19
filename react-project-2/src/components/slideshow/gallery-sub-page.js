import React from 'react';
import './gallery-sub-page.css';
import {Link} from 'react-router-dom';

class GallerySubPage extends React.Component{
    // componentWillMount(){
    //     const test = this.props.location.state.test
    //      console.log(test);
    // }
    render(){
        const pageId = this.props.location.state.pageId;
        const pageText = this.props.location.state.pageText;
        
        const pageTitle = this.props.location.state.pageTitle;
        const pageAuthor = this.props.location.state.pageAuthor;
        const pageLikes = this.props.location.state.pageLikes;
        const pageDislikes = this.props.location.state.pageDislikes;
        const pageDate = this.props.location.state.pageDate;


        return(
            <div className="gallery-sub-page-wrapper">
                <h1>Gallery-Sub-Page</h1>
                <li><Link to='/slideshow'>go back...</Link></li>
                <h1>{pageTitle}</h1>
                <h3>posted by {pageAuthor}</h3>
                <span>posted {pageDate}</span>
                <p>{pageText}</p>
                <p> {pageLikes} | {pageDislikes} </p>
            </div>
        )
    }
}

export default GallerySubPage;