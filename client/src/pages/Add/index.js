
import { Button, TextField } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import {formik, useFormik} from "formik"
import { postProjects } from "../../api/request";
import { projectSchema } from "../../validation/ProjectValidation";
import { useNavigate } from "react-router-dom";

function Add() {
 const navigate=useNavigate()
  function handleSubmit(values,action){
      postProjects(values)
      if(values){
        navigate("/")
      }
      console.log(values)
      // console.log(action)
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      paragraf:'',
      icon:'',
    },
    onSubmit:handleSubmit,
    validationSchema:projectSchema
  });


  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <h1 className="add-h1">Add Pages</h1>
      <form onSubmit={formik.handleSubmit} className="add" style={{marginTop:"400px",margin:"300px auto",width:"400px"}}>
      <TextField style={{display:"block", width:"550px"}}error = {formik.errors.name && formik.touched.name ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "text" name="name" id="outlined-basic" label="Name" variant="outlined" />
      {formik.errors.name && formik.touched.name && <p style={{color:"red"}}>{formik.errors.name}</p>}<br></br>
    
      <TextField style={{display:"block"}} error = {formik.errors.paragraf && formik.touched.paragraf ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "text" name="paragraf" id="outlined-basic" label="paragraf" variant="outlined" />
      {formik.errors.paragraf && formik.touched.paragrad && <p style={{color:"red"}}>{formik.errors.paragraf}</p>}<br></br>

      <TextField style={{display:"block"}} error = {formik.errors.icon && formik.touched.icon ? true :false}
       onChange={formik.handleChange} onBlur = {formik.handleBlur} type = "text" name="icon" id="outlined-basic" label="icon" variant="outlined" />
      {formik.errors.icon && formik.touched.icon && <p style={{color:"red"}}>{formik.errors.icon}</p>}<br></br>

      <Button type="submit" variant="contained"> Add</Button>
      </form>
    </>
  );
}

export default Add;
