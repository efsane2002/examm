import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Team() {
  return (
    <div>
        <Helmet>
            <title>Team</title>
        </Helmet>
      <div>
        <h2 style={{width:"300px",margin:"30px auto"}}>MEET OUR TEAM</h2>
        <p style={{width:"800px",margin:"30px auto",textAlign:"center",color:"gray"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16} style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
        <Grid item xs={3}>
          <Item style={{height:"480px",padding:"0px",backgroundColor:"#26B7E7"}}>
            <img src='https://preview.colorlib.com/theme/onepro/img/team/member-1.jpg.webp' style={{width:"100%",height:"400px"}}></img>
            <h3 style={{paddingTop:"10px",color:"white"}}>TOPSMMPANEL.COM</h3>
            <h4 style={{color:"white"}}>CHEF</h4>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{height:"480px",padding:"0px",backgroundColor:"#26B7E7"}}>
            <img src='https://preview.colorlib.com/theme/onepro/img/team/member-2.jpg.webp'style={{width:"100%",height:"400px"}} ></img>
            <h3 style={{paddingTop:"10px",color:"white"}}>TOPSMMPANEL.COM</h3>
            <h4 style={{color:"white"}}>CHEF</h4>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{height:"480px",padding:"0px",backgroundColor:"#26B7E7"}}>
            <img src='https://preview.colorlib.com/theme/onepro/img/team/member-3.jpg.webp' style={{width:"100%",height:"400px"}}></img>
            <h3 style={{paddingTop:"10px",color:"white"}}>TOPSMMPANEL.COM</h3>
            <h4 style={{color:"white"}}>CHEF</h4>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item style={{height:"480px",backgroundColor:"#26B7E7",padding:"0px"}}>
            <img src='https://preview.colorlib.com/theme/onepro/img/team/member-4.jpg.webp'style={{width:"100%",height:"400px"}}></img>
            <h3 style={{paddingTop:"10px",color:"white"}}>TOPSMMPANEL.COM</h3>
            <h4 style={{color:"white"}}>CHEF</h4>
          </Item>
        </Grid>
      </Grid>
    </Box><br></br><br></br>
    </div>
  )
}
