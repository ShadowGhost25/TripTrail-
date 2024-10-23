import { body } from 'express-validator'

export const routeValidation = [
  body('title', 'Введите название маршрута').isString().isLength({ min: 2 }),
  body('places', 'Укажите корректные места')
    .isArray({min: 1})
    .custom((places) => {
      return places.every(
        (place) =>
          typeof place.name === 'string' &&
          typeof place.lat === 'number' &&
          typeof place.lng === 'number'
      )
    }),
  body('notes', 'Введите корректно заметки').isString().isLength({ min: 1 }),
  body('arrBudget', 'Введите корректные данные бюджета')
    .isArray()
    .custom((budget) => {
      return budget.every(
        (budget) =>
          typeof budget.transport === 'number' &&
          typeof budget.accommodation === 'number' &&
          typeof budget.food === 'number'
      )
    }),
]
