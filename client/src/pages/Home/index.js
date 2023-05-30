import React from 'react'
import style from "./index.module.css"
import Blog from '../Blog'
import Clients from '../Clients'
import Team from '../Team'
import Contact from '../Contact'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <div className={style.div}>
       
            <div className={style.div1}>
            <h4 style={{color:"white"}}>WE ARE</h4>

                <h1 style={{color:"white"}}>BUSINESS THEME CREATOR</h1>
                <p style={{color:"white"}}>At vero eos et accusamus iusto odio dignissimos ducmus qui<br></br> blanditiis praesetium voluptotum deleniti</p>
                <button style={{backgroundColor:"#28B6E8",height:"50px",width:"240px"}}>SEE OUR PROJECT</button>
            </div>
        </div>
    </div>
    <Blog></Blog>
    <Clients></Clients>
    <Team></Team>
    <Contact></Contact>
    </>
  )
}
