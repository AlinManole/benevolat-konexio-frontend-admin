import { useState, createContext } from 'react'

const ListSessionsContext = createContext({})

const ListSessionsContextProvider = ({children}) => {
  const [ sessions, setSessions ] = useState(null)
  const [ session, setSession ] = useState(null)
  const [ modifiedSession, setModifiedSession ] = useState(null)
  const [ newSession, setNewSession ] = useState(null)

  const getSessions = async () => {
    const response = await fetch(`http://localhost:5000/courses`, {
      credentials: 'include'
    })

    const data = await response.json()

    setSessions(data)
  }

  const addNewSession = async values => {
    const response = await fetch(`http://localhost:5000/courses`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const data = await response.json();

    setNewSession(data)
  }

  const modifySession = async (id, values) => {
    const response = await fetch(`http://localhost:5000/courses/${id}`, {
      credentials: 'include',
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const data = await response.json()

    setModifiedSession(data)
  }

  const getSession = async id => {
    const response = await fetch(`http://localhost:5000/courses/${id}`, {
      credentials: 'include'
    })

    const data = await response.json()

    setSession(data)
  } 

  const deleteSession = async id => {
    const response = await fetch(`http://localhost:5000/courses/${id}`, {
      credentials: "include",
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.error) {
      alert(response.error);
      return;
    }

    if (response.status >= 400) {
      alert(response.statusText);
    }
  }

  const value = {
    sessions,
    getSessions,
    newSession,
    addNewSession,
    modifySession,
    getSession,
    deleteSession,
    session
  }

  return (
    <ListSessionsContext.Provider value={value}>
      {children}
    </ListSessionsContext.Provider>
  )
}

export {
  ListSessionsContext,
  ListSessionsContextProvider
}