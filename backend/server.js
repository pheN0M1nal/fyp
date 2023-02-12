const express = require("express")
const mongoose = require("mongoose")
var cors = require("cors")

const app = express()

//cors
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const dbURL =
  "mongodb+srv://Shaheer:abcd1234@test.kdydufa.mongodb.net/?retryWrites=true&w=majority"
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err))

app.use("/api/users", require("./routes/usersRoutes"))
