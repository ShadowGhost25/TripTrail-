import { body } from 'express-validator'

export const loginValidation =[
    body('email', 'Неправильная пароль или почта').isEmail(),
    body('password', 'Неправильный пароль или почта'),
] 

export const registerValidation = [
  body('firstName', 'Имя должно быть больше одного символа').isLength({ min: 2 }),
  body('lastName', 'Фамилия должна быть больше одного символа').isLength({ min: 2 }),
  body('email', 'Неверный формат email').isEmail(),
  body('password', 'Пароль должен содержать минимум 8 символов').isLength({ min: 8 }),
];
