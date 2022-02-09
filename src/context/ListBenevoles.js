import { useState, createContext } from 'react'

const ListBenevolesContext = createContext({})

const ListBenevolesContextProvider = ({children}) => {
  const [ benevoles, setBenevoles ] = useState(null)
  const [ modifiedBenevole, setModifiedBenevole ] = useState(null)

  const modifyBenevole = async (id, values) => {
    const response = await fetch(`http://localhost:5000/users/volunteers/${id}`, {
      credentials: 'include',
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const data = await response.json()

    setModifiedBenevole(data)
  }

  const getBenevoles = async () => {
    const response = await fetch(`http://localhost:5000/users/volunteers`, {
      credentials: 'include'
    })
    const data = await response.json()

    setBenevoles(data)
  }

  const deleteBenevole = async (id) => {
    const response = await fetch(`http://localhost:5000/users/volunteers/${id}`, {
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

  const values = {
    benevoles,
    getBenevoles,
    deleteBenevole,
    modifyBenevole
  }

  return (
    <ListBenevolesContext.Provider value={values}>
      {children}
    </ListBenevolesContext.Provider>
  )
}

export {
  ListBenevolesContext,
  ListBenevolesContextProvider
}