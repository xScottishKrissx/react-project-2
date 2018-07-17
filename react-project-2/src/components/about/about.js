import React from  'react';
import './about.css';

export class About extends React.Component{
    render(){
        return(
            <div className="about-wrapper">
                <div className="col bio">

                    <div id="photo">Photo</div>
                    <div id="mini-bio">Mini Bio</div>
                
                </div>
                <div className="col detailed-history">

                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />

                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />

                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />

                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                    <DetailedHistoryRow />
                
                </div>
                
            </div>
        )
    }
}

export default About;

const DetailedHistoryRow = () =>{
    return (
        <div className="row">
            <h2>Header</h2>
            <p className="sub-header">Sub-Header</p>
            <p className="detailed-paragraph">Paragraph</p>
        </div>
    )
}