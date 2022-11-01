import Header  from './Header';
import {Box, Toolbar } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}     
      </Box>
      <footer>
          
      </footer>
    </>
  );
}