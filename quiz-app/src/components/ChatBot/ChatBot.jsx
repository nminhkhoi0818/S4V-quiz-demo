import React, { useState } from 'react'
import "./ChatBot.css"
import ChatMessage from './ChatMessage'

const ChatBot = () => {
  const [messages, setMessages] = useState([{message: 'Hello, This is Trivia Chatbot'}])

  const [text, setText] = useState("");

  const onSend = () => {
    const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
    };
    
    fetch("http://localhost:5000/chat", requestOptions)
      .then(response => response.json())
      .then(data => {
        const newList = [
          ...messages,
          { message: text, user: true },
          { message: data.message } 
        ];
        setMessages(newList);
        setTimeout(() => {
          document.querySelector("#btn").scrollIntoView();
        }, 500);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    setText("");
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      onSend();
    }
  }

  return (
    <section className="chat-bot">
        <div className="wrapper-2">
          <div className="text-head">
              <h2 className='text-content'>ChatBot</h2>
          </div>
          <div className="chat-message">
              {
                  messages.length > 0 && messages.map((data, index) => <ChatMessage key={index} {...data} />)
              }
              <div className="form-message">
                  <input type='search' className='btn-send' onKeyDown={handleKeyPress} name='question' value={text} onChange={(e) => setText(e.target.value)}></input>
                  <button type='button' onClick={onSend} id='btn'>Send</button>
              </div>
          </div>
        </div>
    </section>
  )
}

export default ChatBot