const express = require("express")
const app = express()
require("dotenv").config()
const { Project } = require("../project")
// const { Existing } = require('../middlewares/existing')

app.post("/", async (req, res) => {
    try {
      const project = await Project.create(req.body)
      res.json(project)
    } catch (e) {
      console.log(e)
      res.status(500).json("Internal server error")
    }
  })
  
  app.get("/", async (req, res) => {
    try {
      const projects = await Project.findAll({
        attributes: ["id", "title", "image", "createdAt", "updatedAt"],
      })
  
      res.json(projects)
    } catch (e) {
      console.log(e)
      res.status(500).json("Internal server error")
    }
  })

module.exports = app