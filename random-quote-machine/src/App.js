import './App.css';
import React,{useState,useEffect} from 'react';
import QuoteMachine from "./quote-machine";
import {quotes,colors} from "./dataset";

function App() {
  const [text,setText]=useState("");
  const [color,setColor]=useState("");

  useEffect(()=>{
    let randomNumber = Math.floor(Math.random() * 10);
    setText(quotes[randomNumber]);
  },[]);
  useEffect(()=>{
    let randomNumber = Math.floor(Math.random() * 10);
    setColor(colors[randomNumber]);
  },[]);

  function handleClick(){
    let randomNumber = Math.floor(Math.random() * 10);
    setText(quotes[randomNumber]);
    setColor(colors[randomNumber]);
  }
  
  return (
    <div className="App">
      <QuoteMachine text={text} color={color} handleClick={handleClick} />
    </div>
  );
}

export default App;
