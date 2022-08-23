import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Loging_Auth = () => {
  const { data: session } = useSession()
  if(session) {
      return (
          <>Loging_Auth Signed in as {session.user.email} <br /> 
           <button onClick={() => signOut()}>Sign out</button>
          </>
          )

  }
  return (
    <>
    Not Sign in <br />
    <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Loging_Auth