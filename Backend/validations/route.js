import { body } from 'express-validator'

export const routeValidation = [
  body('title', 'Введите название маршрута').isString().isLength({ min: 2 }),
  body('places', 'Укажите корректные места')
    .isArray()
    .custom((places) => {
      return places.every(
        (place) =>
          typeof place.name === 'string' &&
          typeof place.lat === 'number' &&
          typeof place.lng === 'number'
      )
    }),
  body('notes', 'Введите корректно заметки').optional().isString(),
  body('budget', 'Введите корректные данные бюджета')
    .isArray()
    .custom((budget) => {
      return budget.every(
        (item) =>
          typeof item.transport === 'number' &&
          typeof item.accommodation === 'number' &&
          typeof item.food === 'number'
      )
    }),
]
