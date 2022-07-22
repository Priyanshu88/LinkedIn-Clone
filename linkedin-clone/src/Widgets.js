import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';



function Widgets() {

    const newsArticle = (heading, subTitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                    <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
    );

    return (

        
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle(
                "Fourth wave might hit India",
                "Top news - 329 readers"
                )}
            {newsArticle(
                "Approaching HR in a wrong way",
                "Hiring & consultancy - 3,242 readers"
                )}
            {newsArticle(
                "Tesla hits new highs again",
                "Cars & auto - 1,129 readers"
                )}
            {newsArticle(
                "IT sector is growing by leaps and bounds in India",
                "Software & IT - 927 readers"
                )}
            {newsArticle(
                "Bad ways to answer coding interview questions",
                "Coding - 2,029 readers"
                )}
            {newsArticle(
                "Experienced are on demand more than freshers",
                "General - 9,326 readers"
                )}
        </div>
    );
};

export default Widgets;

