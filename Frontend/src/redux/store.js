import { configureStore } from '@reduxjs/toolkit'
import { authReducers } from './slice/authSlice'
import { routeReducers } from './slice/routeSlice'
import { registerReducers } from './slice/registerSlice'

export const store = configureStore({
  reducer: {
    auth: authReducers,
    route: routeReducers,
    register: registerReducers,
  },
})

export default store
