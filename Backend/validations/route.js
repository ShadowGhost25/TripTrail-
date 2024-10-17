import { body } from 'express-validator'

export const routeValidation = [
    body('title', 'Введите название маршрута').isString().isLength({ min: 2 }),
    body('places', 'Поставьте место куда хотите отправиться').isArray(),
    body('notes', 'Введите корректно заметки').optional().isString(),
    body('budget', 'Введите цены на бюджет').optional().isNumeric(),
]
