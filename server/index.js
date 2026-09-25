const express = require('express')
const sequelize = require('./db')

const PORT = 5000

const app = express()

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(POST, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
