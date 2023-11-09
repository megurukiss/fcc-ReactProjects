import React from 'react';
import Headline from './Headline';
import './editor.css';

function Editor({text,handleChange,click,handleClick,click2}){

    const style={};
    if(click2===1){
        style.display='none';
    }
    return (
        <div id="editor-wrapper" className="editorWrapper" style={style}>
            <Headline text="Editor" handleClick={handleClick}/>
            <textarea className="textArea" value={text} onChange={handleChange} style={click===1 ? {height:'100vh'} : {}}></textarea>
        </div>);
}

export default Editor;