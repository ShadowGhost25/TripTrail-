import { body } from 'express-validator'


export const routeValidation = [
    body('title','Введите название маршрута').isLength({min: 2}),
    body('places','Поставьте место куда хотите отправиться').isString,
    body('notes','Введите корректно заметки').isString,
    body('budget','Введите цены на бюджет').isString,
]