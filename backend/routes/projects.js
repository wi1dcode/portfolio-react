const express = require("express")
const app = express()
require("dotenv").config()
const { Project } = require("../models")

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
        attributes: ["id", "title", "image", "description", "date", "createdAt", "updatedAt"],
      })
  
      res.json(projects)
    } catch (e) {
      console.log(e)
      res.status(500).json("Internal server error")
    }
  })

  app.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Project.destroy({
      where: { id },
    })

    res.status(204).json("Deleted")
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.put("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const projects = await Project.update(req.body, {
      where: {
        id
      }
    })

    res.json(projects)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

module.exports = app