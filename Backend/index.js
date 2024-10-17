import express from 'express'
import mongoose from 'mongoose'
import { loginValidation, registerValidation } from './validations/auth.js'
import checkAuth from './utils/checkAuth.js'
import cors from 'cors'
import { login, me, register } from './controllers/userControllers.js'
import { createRoute, getAllRoute, removeRoute, updateRoute } from './controllers/RouteController.js'
import { routeValidation } from './validations/route.js'
import handleErrors from './utils/handleErrors.js'

mongoose
    .connect('mongodb+srv://admin:admin@triptrail.bsxem.mongodb.net/blog?retryWrites=true&w=majority&appName=TripTrail')
    .then(() => console.log('Db ok'))
    .catch((err) => console.log('Db error', err))
//!
const app = express()
app.use(express.json())
app.use(cors())
//!
app.get('/', (req, res) => {
    res.send('Hello World !')
})
app.get('/me', checkAuth, me)
//!
app.get('/route', getAllRoute)
app.post('/route', checkAuth, routeValidation, handleErrors, createRoute)
app.delete('/route/:id', checkAuth, removeRoute)
app.patch('/route/:id', checkAuth, routeValidation, handleErrors, updateRoute)
//!
app.post('/login', loginValidation, handleErrors, login)
app.post('/register', registerValidation, handleErrors, register)
//!
app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server ok')
})