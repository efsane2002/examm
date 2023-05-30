const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const crypto = require("crypto");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

const ProjectSchema = new mongoose.Schema({
    name: String,
    paragraf: String,
    icon: String,
  });
  const ProjectModel = new mongoose.model("Projects", ProjectSchema);
 
 

  app.get("/api", (req, res) => {
    res.send("welcome to out API!");
  });
  
  //GET ALL - MONGO DB
  app.get("/api/project", async (req, res) => {
    const { name } = req.query;
    const projects = await ProjectModel.find();
    if (!name) {
      res.status(200).send(projects);
    } else {
      const searchedProject = projects.filter((x) =>
        x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      );
      res.status(200).send(searchedProject);
    }
  });
  //GET BY ID- MONGO DB
  app.get("/api/project/:id", async(req, res) => {
    const { id } = req.params;
    const project = await ProjectModel.findById(id)
    res.status(200).send(project);
  });
  //DELETE - MONGO DB
  app.delete("/api/project/:id",async(req, res) => {
    const id = req.params.id;
    //delete
    const deleteProject = await ProjectModel.findByIdAndDelete(id);
    res.status(203).send({
      message: `${deleteProject.name} deleted successfully!`,
    });
  });
  //POST- MONGO DB
  app.post("/api/project", async (req, res) => {
    const { name, paragraf, icon } = req.body;
    const newProject = new ProjectModel({
      name: name,
      paragraf: paragraf,
      icon: icon,
    });
    await newProject.save();
    res.status(201).send({
      message: `${newProject.name} posted successfully`,
      payload: newProject,
    });
  });
 
  
  
  PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
  });
  
  DB_PASSWORD = process.env.DB_PASSWORD;
  DB_CONNECTION = process.env.DB_CONNECTION;
  
  mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
    console.log("Mongo DB connected!");
  });