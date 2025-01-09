import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function login() {
    const { user , loginWithRedirect,isAuthenticated  } = useAuth0()

    console.log("current user", user)
  return (
    <div>
    
        {
            isAuthenticated ? (<button>Logout</button>) : (<button onClick={(e) => loginWithRedirect()}>login with Redirect</button>)
        }
     
    </div>
  )
}

export default login
