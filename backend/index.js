const express = require("express")
const app = express()
const cors = require("cors")
const adminRoute = require("./routes/projects")

require("./models")

app.use(express.json())
app.use(cors())

app.use("/projects", adminRoute)


app.listen(process.env.port, () => {
  console.log(`Server running on ${process.env.port}`)
})