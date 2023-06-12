'use client'
import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { Avatar,Button } from '@mui/material';

export default function Loginn() {
    const  { data: session } = useSession();
 
    if (session) {
        return<>
           <Button variant={'contained'} color={'error'} onClick={()=>signOut()}>Sign Out</Button>
        </>
    }
    return <>
       
       <Button variant={'contained'} color={'success'}  onClick={()=>signIn()}>Sign in</Button>
    </>
}

