import { body } from 'express-validator'

export const loginValidation =[
    body('email', 'Неправильная почта').isEmail(),
    body('password', 'Неправильный пароль').isLength({min: 8}),
] 
export const registerValidation =[
    body('fullName', 'Неправильное имя').isLength({min: 2}),
    body('email', 'Неправильная почта').isEmail(),
    body('password', 'Неправильный пароль').isLength({min: 8}),
]
