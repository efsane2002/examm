import { BASE_URL } from "./base_URL";
import axios from "axios";

//get all
export const getAllProjects = async(name)=>{
    let projects;
    let URL;
    if (!name) {
        URL = BASE_URL+'/project';
    }
    else{
        URL = BASE_URL+`/project/?name=${name}`
    }
    await axios.get(URL)
    .then(res =>{
        projects = res.data;
    })

    return projects
}
//get by id
export const getProjectsByID = async(id)=>{
    let project;
    await axios.get(`${BASE_URL}/project/${id}`)
    .then(res =>{
        project = res.data;
    })

    return project
}
//delete
export const deleteProjectsByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/project/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//post
export const postProjects = (payload)=>{
    axios.post(`${BASE_URL}/project`,payload)
}
//edit
export const editProjectsByID = (id,payload)=>{
    axios.put(`${BASE_URL}/project/${id}`,payload)
}