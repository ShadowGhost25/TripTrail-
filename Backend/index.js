import express from 'express'
import mongoose from 'mongoose'
import { loginValidation, registerValidation } from './validations/auth.js'
import checkAuth from './utils/checkAuth.js'
import { login, me, register } from './controllers/userControllers.js'
import { createRoute } from './controllers/RouteController.js'
import { routeValidation } from './validations/route.js'

mongoose
    .connect('mongodb+srv://admin:admin@triptrail.bsxem.mongodb.net/blog?retryWrites=true&w=majority&appName=TripTrail')
    .then(() => console.log('Db ok'))
    .catch((err) => console.log('Db error', err))
const app = express()
app.use(express.json())
//!
app.get('/', (req, res) => {
    res.send('Hello World !')
})
app.get('/me', checkAuth, me)
app.post('/route',checkAuth, createRoute )
// app.get('/route', checkAuth, route)
// app.get('/route/:id', checkAuth, createRouteOne )
// app.delete('/route', checkAuth, remove)
// app.patch('/route', checkAuth, update)
//!
app.post('/login', loginValidation, login)
app.post('/register', registerValidation,register)
//!
app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server ok')
})