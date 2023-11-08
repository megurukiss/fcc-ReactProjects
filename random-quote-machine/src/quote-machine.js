import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import "./quote-machine-styles.css";

function quoteMachine({text,color,handleClick}){
    

    const textToTweet = text.quote;
    const hashtag = "Quote";
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToTweet)}&hashtags=${encodeURIComponent(hashtag)}`;
    const style={backgroundColor:color}
    document.body.style.setProperty('background-color', color);
    return (
        <div id="wrapper">
            <div id="box" className="wrapper">
                <div id="quote" className="quote">
                    <FontAwesomeIcon icon={faQuoteLeft}  className="quote-icon"/>
                    <span>{text.quote}</span>
                </div>
                <div id="author" className="author">-<span>{text.author}</span></div>
                <div id="bottom" className="bottom">
                    <a className="button1" target="_blank" rel="noopener noreferrer" href={tweetLink} style={style}><FontAwesomeIcon icon={faTwitter} /></a>
                    <button className="button2" onClick={handleClick} style={style}>New Quote</button>
                </div>
            </div>
            <div id="footer" className="footer">
                by <a href="https://github.com/megurukiss" className="footerText">FCZ</a>
            </div>
        </div>
    );
}
export default quoteMachine;