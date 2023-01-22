import React from 'react'
import { useProductContext } from "../context/datacontext";
const Note = (props) => {
    const {getData,note}=useProductContext();
        console.log(note);
  return (
        <button 
        value={props.value} type='button' name={"category"} onClick={getData}
         className="note" id={props.id} style={{borderLeftWidth:"0px"}}>
          <h1>{props.item}</h1>
         
        </button>
      );
  
}

export default Note