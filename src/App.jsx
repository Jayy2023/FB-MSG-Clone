import React, {useState} from 'react'


export default function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);


  const sendMessage = (event) => { //all logic to send messages goes here
    setMessages([...messages, input])
  }

  return (
    <div>
      <h4>Hello From DadWhoCodes💻 </h4>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
      
    </div>
  )
}
