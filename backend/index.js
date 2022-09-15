const express = require("express")
const app = express()
const cors = require("cors")
const adminRoute = require("./routes/admin")

require("./models")

app.use(express.json())
app.use(cors())

app.use("/admin", adminRoute)


app.listen(process.env.port, () => {
  console.log(`Server running on ${process.env.port}`)
})