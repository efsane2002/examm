import React from 'react'
import { Helmet } from 'react-helmet'
import style from "./index.module.css"

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Contact</title>
    </Helmet>
    <div className={style.div}>
        <p style={{color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"70px"}}>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    </>
  )
}
