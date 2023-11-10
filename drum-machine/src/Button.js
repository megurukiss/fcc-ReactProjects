import React,{useState,useEffect,useRef} from 'react';
import "./Button.css";
import {keySrc} from './src';

function Button({buttonKey,src, onButtonClick,volume,power}){
    const [click,setClick]=useState(false);
    const audioRef = useRef(null);

    function playSound(){
        if (power && audioRef.current) {
            audioRef.current.volume=volume/100;
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }

    function handleClick(event){
        setClick(true);
        playSound();
        onButtonClick(keySrc[buttonKey]);
        setTimeout(()=>{setClick(false)},200);
    }
    
    function handleKeyDown(event){
        if(event.key===buttonKey || event.key===buttonKey.toLowerCase()){
            playSound();
            setClick(true);
            onButtonClick(keySrc[buttonKey]);
            setTimeout(()=>{setClick(false)},200);
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        // Cleanup the event listener
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    const buttonclass=click ? "button button-active" : "button button-normal";
    return (
        <div className="buttonWrapper">
            <button className={buttonclass} onClick={handleClick}>{buttonKey}</button>
            <audio ref={audioRef} src={src}></audio>
        </div>
    );

}
export default Button;