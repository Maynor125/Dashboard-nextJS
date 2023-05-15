import Image from 'next/image'
import './globals.css'
import { Header } from '../components/header'
import { SideMenu } from '../components/sideMenu'
import {SessionProvider} from 'next-auth/react'
import Loginn from '../components/login/Login'

export default function Home() {
  return (
   <>
     <Header/>
     <SideMenu/>
     <Loginn/>
   </>
  )
}  
