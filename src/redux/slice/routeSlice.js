import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  exampleRoutes: [
    {
      name: 'Маршрут по Москве',
      places: [
        { name: 'Красная площадь', lat: 55.753215, lng: 37.622504 },
        { name: 'Парк Горького', lat: 55.729875, lng: 37.605086 },
      ],
      note: 'Обязательно посетить в хорошую погоду',
      budget: { transport: 500, accommodation: 2000, food: 1000 },
    },
    {
      name: 'Тур по Санкт-Петербургу',
      places: [
        { name: 'Эрмитаж', lat: 59.939832, lng: 30.31456 },
        { name: 'Исаакиевский собор', lat: 59.9342802, lng: 30.3063091 },
      ],
      note: 'Хороший маршрут на выходные',
      budget: { transport: 1000, accommodation: 3000, food: 1200 },
    },
  ],
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {},
})

export const routeReducers = routeSlice.reducer
