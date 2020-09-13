import express, { Express } from 'express'
import mongoose from "mongoose"
import cors from 'cors'
// const bodyParser = require('body-parser')
import todoRouter from './routes/index'

const app: Express = express()

const PORT: string | number = process.env.PORt || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(require('connect-multiparty')())

app.use(cors())
app.use(todoRouter)

const uri: string = `mongodb://localhost:27017/${process.env.MONGO_DB}?authSource=admin&retryWrites=true&w=majority`
const options = { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
}

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch((err: Error) => {
    throw err
  })
