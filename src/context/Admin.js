import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminContext = createContext({})

const AdminContextProvider = ({ children }) => {

  const navigate = useNavigate()

 
  const [ user, setUser ] = useState(null)

  const login = async (values) => {
    const response = await fetch (`http://localhost:5000/auth/login/admin`, {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(values)
    })

    if(response.error) {
      alert(response.error)
      return
    }
    if(response.status >= 400) {
      alert(response.statusText)
      return
    }

    const data = await response.json()
    setUser(data)
  }

  const logout = async () => {
    const response = await fetch(`http://localhost:5000/auth/logout`, {
      credentials: 'include',
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if(response.error) {
      alert(response.error)
      return
    }
    if(response.status >= 400) {
      alert(response.statusText)
      return
    }

    setUser(null)
    navigate('/login')
  }

  const value = {   
    user,
    setUser,
    logout,
    login
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

export {
  AdminContext,
  AdminContextProvider
}