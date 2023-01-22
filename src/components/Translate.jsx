import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Pdes from './Pdes'
import Button from './Button'
import { useProductContext } from '../context/datacontext'

function Translate(props) {

    const submit=props.submit;
    const change=props.change;
    const response=props.response;
    const changes=props.changes
    console.log(response);
  return (
    
    <div>
        <div className="middle"> Select the Language to Translate : <input  type="text" placeholder="Enter the language" name="language" onChange={changes} ></input></div>
    <Pdes
    img="./trans.jpg"
    description="Translate according to yours..   "
    text="Which Text Would you like to translate......✍️ "
    change={change}
    response={response}
    />
    <Button
    type="Get AI Result 🧑‍🎓"
    class="btn" 
    id="textBtn"
    submit={submit}
    />
  
    </div>
    
 
  )
}

export default Translate