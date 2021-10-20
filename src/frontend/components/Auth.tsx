import React, { useCallback, useEffect, useState } from "react"
import { AuthClient } from "@dfinity/auth-client"
import dfinityLogo from "../assets/dfinity.svg"

// Note: This is just a basic example to get you started
function Auth() {
  const [signedIn, setSignedIn] = useState<boolean>(false)
  const [principal, setPrincipal] = useState<string>("")
  const [client, setClient] = useState<any>()

  const initAuth = async () => {
    const client = await AuthClient.create()
    const isAuthenticated = await client.isAuthenticated()

    setClient(client)

    if (isAuthenticated) {
      const identity = client.getIdentity()
      const principal = identity.getPrincipal().toString()
      setSignedIn(true)
      setPrincipal(principal)
    }
  }

  const signIn = async () => {
    const { identity, principal } = await new Promise((resolve, reject) => {
      client.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          const identity = client.getIdentity()
          const principal = identity.getPrincipal().toString()
          resolve({ identity, principal })
        },
        onError: reject,
      })
    })
    setSignedIn(true)
    setPrincipal(principal)
  }

  const signOut = async () => {
    await client.logout()
    setSignedIn(false)
    setPrincipal("")
  }

  useEffect(() => {
    initAuth()
  }, [])

  return (
    <div className="flex justify-start">

      {!signedIn && client ? (
        <button onClick={signIn} className="flex text-white mr-5">
          Sign in
          <img className="w-5 h-5 text-center ml-2 mt-1" src={dfinityLogo} />
        </button>
      ) : null}

      {signedIn ? (
        <>
          <div data-tip={principal} className="tooltip tooltip-bottom mr-2">
            <button className="btn bg-indigo-500">Signed in ID</button>
          </div>
          <button onClick={signOut} className="flex text-white">Sign out</button>
        </>
      ) : null}

    </div>
  )
}

export { Auth }
