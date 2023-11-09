import React from 'react';
import Headline from './Headline';
import {marked} from 'marked';
import './previewer.css';


function Previewer({text,click,handleClick,click2}){

    function createMarkup(text) {
        return { __html: marked(text, { sanitize: true }) };
      }
    
    const style={};
    if(click===1){
        style.top='0px';
    }
    if(click2===1){
        style.display='none';
    }
    return (
        <div className="previewWrapper" style={style}>
            <Headline text="Previewer" handleClick={handleClick} />
            <div id="viewer" className="viewer" dangerouslySetInnerHTML={createMarkup(text)} style={click===1 ? {height:'100vh',overflow:'auto'} : {}} ></div>
        </div>
    );
}
export default Previewer;