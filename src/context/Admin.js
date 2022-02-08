import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminContext = createContext({})

const AdminContextProvider = ({ children }) => {

  const navigate = useNavigate()

  const [ admin, setAdmin ] = useState({})
  const [ user, setUser ] = useState(null)


  const signup = async values => {
    const signupResponse = await fetch('http://localhost:5000/auth/signup', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        businessName: values.businessName,
        telephone: values.telephone,
        password: values.password,
      })
    })

    const admin = await signupResponse.json()

    if (admin.error) {
      alert(admin.error)
      return
    }

    const loginResponse = await fetch('http://localhost:5000/auth/login/admin', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email: admin.email,
        password: admin.password
      })
    })

    const loginData = await loginResponse.json()

    if (loginResponse.status >= 400) {
      alert(loginResponse.statusText)
    } else {
     
      console.log(loginResponse)
    }
    
    setUser(loginData)
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
    admin,  
    setAdmin,
    user,
    setUser,
    signup,
    logout
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