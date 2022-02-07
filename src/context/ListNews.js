import { useState, createContext } from 'react'

const ListNewsContext = createContext({})

const ListNewsContextProvider = ({children}) => {
  const [ news, setNews ] = useState(null)

  const getNews = async () => {
    const response = await fetch(`http://localhost:5000/news`, {
      credentials: 'include'
    })

    const data = await response.json()

    setNews(data)
  }

  const value = {
    news,
    getNews
  }

  return (
    <ListNewsContext.Provider value={value}>
      {children}
    </ListNewsContext.Provider>
  )
}

export {
  ListNewsContext,
  ListNewsContextProvider
}