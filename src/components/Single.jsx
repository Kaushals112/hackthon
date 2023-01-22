import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Pdes from './Pdes'
import Button from './Button'

function Single(props) {
    const submit=props.submit;
    const change=props.change;
    const response=props.response;
    console.log(response);
    
  return (
    <div>
    
    <Pdes
    img="./head.jpeg"
    description="Generate Product Description"
    text="Which Product Would you like to get a description for?"
    
    change={change}
    response={response}

    />
    <Button
    type="Get AI Suggestions"
    class="btn" 
    id="textBtn"
    submit={submit}
    />
  
    </div>
  )
}

export default Single