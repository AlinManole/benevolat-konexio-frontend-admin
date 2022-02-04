import { useState, createContext } from 'react'

const ListBenevolesContext = createContext({})

const ListBenevolesContextProvider = ({children}) => {
  const [ benevoles, setBenevoles ] = useState(null)

  const getBenevoles = async () => {
    const response = await fetch(`http://localhost:5000/users/volunteers`, {
      credentials: 'include'
    })

    const data = await response.json()

    setBenevoles(data)
  }

  const values = {
    benevoles,
    getBenevoles
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