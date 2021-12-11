import express from 'express'
const cors = require('cors')

import { router } from './routes' 
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER, Content-Type, Authorization'
  )
  app.use(cors())
  next()
})

app.use(router)


app.listen(3030, () => {
  console.log('Server is running on port 3000')
})
