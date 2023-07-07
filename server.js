const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const sequelize = require('./db')
const router = require('./routes/index')
//const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 8081

const app = express()

let corsOptions = {
  origin: [ 'http://localhost:8081' ]
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))


app.use(express.urlencoded({extended: true}))
app.use('/api', router)
//app.use(errorHandler)


const start = async () => {
  try {

    sequelize.authenticate()
    .then(() => {
      console.log('connected..')
    })
    .catch(err => {
      console.log('Error' + err)
    })

    sequelize.sync({force: false})
    .then(() => {
      console.log('yes re-sync done!')
    })

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }

}

start()