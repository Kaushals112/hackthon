import React from 'react'

const Self = ({request}) => {
    var currentdate = new Date(); 
var datetime =  
                 currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    const value=request
    if(request==="")
    console.log("this is "+request);
    if(request!=null && request!==""){
  return (
    <li className="self">
    <div className="avatar"><img src="http://i.imgur.com/HYcn9xO.png" alt="img" draggable="false"/></div>
    <div className="msg">
    
    <p className='text'> {value}</p>
    
      <time>{datetime}</time>
    </div>
</li>
  )
}

else{
    return <div></div>
}
}


export default Self