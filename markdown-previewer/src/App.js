import React,{useEffect,useState} from 'react';
import './App.css';
import Editor from './Editor';
import Previewer from './previewer';
import {data} from './data';
function App() {
  const [text,setText]=useState("");

  useEffect(()=>{
    setText(data);
  },[]);
  function handleChange(event){
    setText(event.target.value);
  }

  const [click1,setClick1]=useState(0)
  function handleClick1(){
    setClick1((pre)=>(1-pre));
}
  const [click2,setClick2]=useState(0)
  function handleClick2(){
    setClick2((pre)=>(1-pre));
  }
  return (
    <div className="App">
      <Editor text={text} handleChange={handleChange} click={click1} handleClick={handleClick1} click2={click2} style={click2===1 ? {display:'none'}:{}} />
      <Previewer text={text} click={click2} handleClick={handleClick2} click2={click1} style={click1===1 ? {display:'none'}:{}}/>
    </div>
  );
}

export default App;
