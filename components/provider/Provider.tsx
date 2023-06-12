"use client";

import darkTheme from "@/theme/darkTheme";
import ligthTheme from "@/theme/ligthTheme";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  useTheme,
  IconButton,
  createTheme,
} from "@mui/material";
import { SessionProvider } from "next-auth/react";
import React from "react";
const colorModeContext = React.createContext({ toggleColorMode: () => {} });
import { Header } from "../header";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CssBaseline />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Provider;
