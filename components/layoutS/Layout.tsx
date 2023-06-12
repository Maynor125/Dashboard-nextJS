'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import SideMenu from '../SideMenu/SideMenu'
import scss from './Layout.module.scss'

const Layout = (props:any) => {
    const {data:session} = useSession()
  return (
    <main className={scss.layout}>
        {session && <SideMenu/>}
        <div className={scss.content}>
           {props.children}
        </div>
    </main>
  )
}

export default Layout