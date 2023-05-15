'use client'
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'

export default function Loginn() {
    const  { data: session } = useSession({
        required:true
    });
 
    if (session) {
        return<>
           Signed in as {session?.user?.email} <br />
           <button onClick={()=>signOut()}>Sign Out</button>
        </>
    }
    return <>
       Not signed in <br />
       <button  onClick={()=>signIn()}>Sign in</button>
    </>
}

