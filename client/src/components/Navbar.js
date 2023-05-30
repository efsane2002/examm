import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import style from "./index.module.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"white",position:"fixed",zIndex:"99"}}>
      <div style={{backgroundColor:"#EEEEEE",height:"60px",width:"100%",display:"flex"}}>
         <span style={{color:"black",height:"60px",display:"flex",alignItems:"center",marginLeft:"100px"}}> +880 1911 854 378  backpiper.com@gmail.com</span>
      </div>

        <Toolbar>
        <img src='https://preview.colorlib.com/theme/onepro/img/logo.png.webp' style={{marginLeft:"70px"}}></img>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            <ul className={style.ul}>

                <li>
                    <Link to="/" style={{textDecoration:"none",color:"#28B6E8"}}>Home</Link>
                </li>
               
                <li>
                    <Link to="/features" style={{textDecoration:"none",color:"black"}}>Features</Link>
                </li>
                <li>
                    <Link to="/services" style={{textDecoration:"none",color:"black"}}>Services</Link>
                </li>
                <li>
                    <Link to="/portfolio" style={{textDecoration:"none",color:"black"}}>Portfolio</Link>
                </li>
                <li>
                    <Link to="/team"style={{textDecoration:"none",color:"black"}} >Team</Link>
                </li>
                <li>
                    <Link to="/clients" style={{textDecoration:"none",color:"black"}}>Clients</Link>
                </li>
                <li>
                    <Link to="/pricing"style={{textDecoration:"none",color:"black"}} >Pricing</Link>
                </li>
                <li>
                    <Link to="/news"style={{textDecoration:"none",color:"black"}} >News</Link>
                </li>
                <li>
                    <Link to="/blog" style={{textDecoration:"none",color:"black"}}>Blog</Link>
                </li>
               
                <li>
                    <Link to="/contact" style={{textDecoration:"none",color:"black"}}>Contact</Link>
                </li>
                <li>
                    <Link to='/add'style={{textDecoration:"none",color:"black"}}>Add</Link>
                </li>
            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}