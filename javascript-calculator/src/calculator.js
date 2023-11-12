import React,{useState} from 'react';
import './calculator.css';

function Calculator(){
    const keys=['AC','/','X','7','8','9','-','4','5','6','+','1','2','3','=','0','.'];
    const [input,setInput]=useState('0');
    const [output,setOutput]=useState('');
    const [op,setOp]=useState(false);
    const [result,setResult]=useState(null);

    function extractNumber(s){
        let result='';
        for(let i=s.length-1;i>=0;i--){
            if(['X','+','-','/'].includes(s[i])){
                break;
            }
            result=s[i]+result;
        }
        return result;
    }

    function handleKeyClick(event){
        let curKey=event.target.value;

        switch(curKey){
            case 'AC':
                setInput('0');
                setOutput('');
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                setInput((pre)=>{
                    if(op){
                        setOp(false);
                        return curKey;
                    }
                    if((pre[pre.length-1]>='1' && pre[pre.length-1]<='9') || (pre[pre.length-1]==='0' && pre.length>1) || (pre[pre.length-1]==='.')){
                        return pre+curKey;
                    }
                    return curKey;
                });
                setOutput((pre)=>{
                    if(pre.length===1 && pre==='0'){
                        return curKey;
                    }
                    if(op){
                        setOp(false);
                        return curKey;
                    }
                    return pre+curKey;
                })
                break;

            case '+':
            case '-':
            case 'X':
            case '/':
                setInput(curKey);
                setOutput((pre)=>{
                    if(['+','-','X','/'].includes(pre[pre.length-1])){
                        return pre;
                    }
                    if(op){
                        setOp(false);
                        return result+curKey;
                    }
                    return pre+curKey;
                });
                break;
            case '.':
                setInput((pre)=>{
                    if(op){
                        setOp(false);
                        return '0'+curKey
                    }
                    if(pre.includes('.')){
                        return pre;
                    }
                    if((pre[pre.length-1]>='1' && pre[pre.length-1]<='9') || (pre.length===1 && pre==='0')){
                        return pre+curKey;
                    }
                    return '0'+curKey;
                })
                setOutput((pre)=>{
                    if(op){
                        setOp(false);
                        return '0'+curKey
                    }
                    if(extractNumber(pre).includes('.')){
                        return pre;
                    }
                    if(pre[pre.length-1]>='1' && pre[pre.length-1]<='9'){
                        return pre+curKey;
                    }
                    if(extractNumber(pre)==='0'){
                        return pre+curKey;
                    }
                    return pre+'0'+curKey;
                });
                break;
            case '0':
                setInput((pre)=>{
                    if(op){
                        setOp(false);
                        return curKey;
                    }
                    if(pre.length===1 && pre==='0'){
                        return pre;
                    }
                    if((pre[pre.length-1]>='1' && pre[pre.length-1]<='9') || (pre[pre.length-1]==='0' && pre.length>1) || (pre[pre.length-1]==='.') ){
                        return pre+curKey;
                    }
                    return curKey;
                });
                setOutput((pre)=>{
                    if(pre==='0'){
                        return pre;
                    }
                    if(pre===''){
                        return curKey;
                    }
                    if(extractNumber(pre)==='0'){
                        return pre;
                    }
                    if(op){
                        setOp(false);
                        return curKey;
                    }
                    return pre+curKey;
                });
                break;
            case '=':
                setInput((pre)=>{
                    try{
                        let calculationResult = eval(output.replace('X', '*')).toString();
                        setResult(calculationResult);
                        setOp(true);
                        return calculationResult;
                    }catch(error){
                        return pre;
                    }
                });
                setOutput((pre)=>{
                    try{
                        let calculationResult = eval(output.replace(/X/g, '*')).toString();
                        setResult(calculationResult);
                        setOp(true);
                        return pre+'='+calculationResult;
                    }catch(error){
                        return pre;
                    }
                });
                break;

        }
    }

    return (
        <div className='calWrapper'>
            <div className='screen'>{output}</div>
            <div className='inscreen'>{input}</div>
            <div className='keysWrapper'>
                {keys.map((key,index)=>(<button className={`key n-${index}`} value={key} key={key} onClick={handleKeyClick}>{key}</button>))}
            </div>
        </div>
    );
}
export default Calculator;