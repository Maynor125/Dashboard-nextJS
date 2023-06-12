import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'
import React from 'react'

const Signin = () => {
    const {data:session} = useSession()
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <h2>
            {session ? "Thank you for login in" : "Please login"}
        </h2>
    </Box>
  )
}

export default Signin