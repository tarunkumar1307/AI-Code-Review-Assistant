import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import testRoutes from './routes/testRoutes.js'

dotenv.config()

// create express aplication
const app = express()

// middleware
app.use(cors())
app.use(express.json())

app.use("/", testRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})