import { configureStore } from '@reduxjs/toolkit'
import { authReducers } from './slice/authSlice'
import { routeReducers } from './slice/routeSlice'

export const store = configureStore({
  reducer: {
    auth: authReducers,
    route: routeReducers,
  },
})

export default store
