import { useState, createContext } from 'react'

const ListMessageContext = createContext({})

const ListMessageContextProvider = ({children}) => {
  const [ messages, setMessages ] = useState(null)
  const [ message, setMessage ] = useState(null)
  const [ newMessage, setNewMessage ] = useState(null)

  const getMessages = async (id) => {
    const response = await fetch(`http://localhost:5000/messages/user/${id}`, {
      credentials: 'include'
    })

    const data = await response.json()

    setMessages(data)
  }

  const getMessage = async (id) => {
    const response = await fetch(`http://localhost:5000/messages/message/${id}`, {
      credentials: 'include'
    })

    const data = await response.json()

    setMessage(data)
  }

  const addMessage = async (values) => {
    const response = await fetch(`http://localhost:5000/messages`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const data = await response.json()

    setNewMessage(data)
  }

  const value = {
    messages,
    getMessages,
    newMessage,
    addMessage,
    message,
    getMessage
  }

  return (
    <ListMessageContext.Provider value={value}>
      {children}
    </ListMessageContext.Provider>
  )
}

export {
  ListMessageContext,
  ListMessageContextProvider
}