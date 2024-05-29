const express = require('express')
const mongoose = require('mongoose');
const { ConnectionDb } = require('./config/Database');
require('dotenv').config()
const app = express();
const cookieParser = require('cookie-parser')
mongoose.set('strictQuery', false)
app.use(cookieParser())
const cors = require('cors')
app.use(express.static('backend/public'))
app.use(express.json())
app.use(cors())
app.use('/api', require('./routes/Login'))
app.use('/api', require('./routes/PaymentRoutes'))
app.use('/api', require('./routes/UserRoutes'))
app.use('/api', require('./routes/StudentRoutes'))
app.use('/api', require('./routes/ClassRoutes'))
const path = require('path')
app.use(express.static(path.join(__dirname, "../frontend/dist")))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
})
ConnectionDb()
app.listen(process.env.port, () => console.log(process.env.Runningconnect))