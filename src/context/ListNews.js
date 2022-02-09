import { useState, createContext } from 'react'

const ListNewsContext = createContext({})

const ListNewsContextProvider = ({ children }) => {
  const [news, setNews] = useState(null)
  const [newNews, setNewNews] = useState(null)

  const getNews = async () => {
    const response = await fetch(`http://localhost:5000/news`, {
      credentials: 'include'
    })

    const data = await response.json()

    setNews(data)
  }


  const addNewNews = async (values) => {
    const response = await fetch(`http://localhost:5000/news`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if (response.error) {
      alert(response.error);
      return;
    }

    if (response.status >= 400) {
      alert(response.statusText);
    }

    const data = await response.json();

    setNewNews(data)
  }

  const deleteNews = async (id) => {
    const response = await fetch(`http://localhost:5000/news/${id}`, {
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
    news,
    getNews,
    deleteNews,
    addNewNews
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