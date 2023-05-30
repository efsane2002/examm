import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import style from "./index.module.css"
import { Helmet } from 'react-helmet';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Clients() {
  return (
    <div><br></br><br></br>
    <Helmet>
        <title>Clients</title>
    </Helmet>
      <div style={{backgroundColor:"#EEEEEE"}}>
        <h1 style={{margin:"0 auto",width:"400px",fontSize:"25px",paddingTop:"100px"}}>OUR AWESOME PROJECTS</h1>
        <p style={{width:"900px",margin:"0 auto",textAlign:"center", paddingTop:"20px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
    <div style={{paddingTop:"40px",display:"flex",justifyContent:"center"}}>
        <span style={{marginRight:"10px",fontWeight:"bold"}}>ALL</span><span style={{marginRight:"10px",fontWeight:"bold"}}></span><span style={{marginRight:"10px",fontWeight:"bold"}}>WEB DESIGN</span><span style={{marginRight:"10px",fontWeight:"bold"}}>WEB DEVELOPMENT</span><span style={{marginRight:"10px",fontWeight:"bold"}}>ONLINE MARKETING</span><span style={{marginRight:"10px",fontWeight:"bold"}}>DIGITAL MEDIA</span>
      </div>
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16} style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_1.jpg.webp' style={{width:"100%"}}></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src="https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_2.jpg.webp"style={{width:"100%"}} ></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_3.jpg.webp'style={{width:"100%"}} ></img>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_4.jpg.webp' style={{width:"100%"}}></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_5.jpg.webp' style={{width:"100%"}}></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_6.jpg.webp' style={{width:"100%"}}></img>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16} style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
        <Grid item xs={4}>
          <Item>
            <img src="https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_7.jpg.webp" style={{width:"100%"}}></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_8.jpg.webp' style={{width:"100%"}}></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <img src='https://preview.colorlib.com/theme/onepro/img/portfolio/portfolio_9.jpg.webp' style={{width:"100%"}}></img>
          </Item>
        </Grid>
      </Grid>
    </Box><br></br><br></br>
      </div>
      </div>
     
    </div>
  )
}
