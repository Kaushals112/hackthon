import React from 'react'

const Other = ({response}) => {
    var currentdate = new Date(); 
    var datetime =  
                     currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    const value=response
    if(response!=null && response!==""){
  return (
    <li className="other">
              <div className="avatar"><img src="https://thumbs.dreamstime.com/b/ai-robot-head-chat-bot-icon-isolated-white-background-ai-robot-head-chat-bot-icon-109860127.jpg" alt="img" draggable="false"/></div>
              <div className="msg">
              <p className='text'>{value}</p>
                <time>{datetime}</time>
              </div>
        </li>
  )
}}

export default Other