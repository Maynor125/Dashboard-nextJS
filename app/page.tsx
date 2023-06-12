'use client'
import Image from "next/image";
import "./globals.css";
import { Header } from "../components/header";
import SideMenu from "../components/SideMenu/SideMenu";
import { SessionProvider, useSession } from "next-auth/react";
import Loginn from "../components/login/Login";
import Dashboard from "./dashboard/page";
import Login from "../components/login/Login";
import scss from './page.module.scss'
import React from "react";

const Home: React.FC = ()=> {
  const { data: session } = useSession();
  return (
    <> 
    <main className={scss.main}>
      {session && <Dashboard/>}
      {!session && <Login/>}
    </main>
    </>
   
  );
}

export default Home