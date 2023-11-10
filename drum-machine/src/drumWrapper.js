import Button from './Button';
import {src,keySrc,keys} from './src';
import React,{useState} from "react";
import './drumWrapper.css';

function DrumWrapper(){
    const [text,setText]=useState('');
    const [volume,setVolume]=useState(50);
    const [power,setPower]=useState(true);

    function handleVolumeChange(event){
        setVolume(event.target.value);
        setText(event.target.value);
    }
    function handleClick(){
        setPower((pre)=>(!pre));
    }

    return (
        <div className="wrapper">
            <div className='keyWrapper'>
                {keys.map((key,index)=>(<Button buttonKey={key} key={index} src={src[keySrc[key]]} onButtonClick={setText} volume={volume} power={power} />))}
            </div>
            <div className='toolBar'>
                <div className='text'>{text}</div>
                <input type='range' min='0' max='100' value={volume} className='volumeBar' onChange={handleVolumeChange} />
                <div className='powerContainer'>
                    <div className='powerLabel'>Power</div>
                    <button className="powerButton" onClick={handleClick}>
                        <div className='off' style={power ? {backgroundColor:'black'} : {}}></div>
                        <div className='on' style={!power ? {backgroundColor:'black'} : {}}></div>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DrumWrapper;