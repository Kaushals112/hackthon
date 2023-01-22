import React from 'react'
import Button from './Button'
function Pdes(props) {
    const submit=props.submit;
    const change=props.change;
    const response=props.response;
    console.log(response);
  return (
    

    <div >

   
   <div className='top'> <img src={props.img}/>
    <h1 id="set">{props.description}</h1>
    
  
    <h6 id="seth6">{props.text} </h6>

    <textarea id="text" rows={"2"} cols={"50"} onChange={change}></textarea></div>
   
    <Button submit={submit}/>
    <h7 id="seth3">API Respond here...</h7>
    <textarea id="text2" rows={"10"} cols={"50"} value={response}></textarea>
 
    </div>
  )
}

export default Pdes
