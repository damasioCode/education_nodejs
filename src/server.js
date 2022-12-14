import 'dotenv/config'
import express from 'express'
import routes from './routes/api.js'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000

app.use(cors({ origin: '*' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', routes)

app.listen( port, () => {
  console.log('Server is running')
})