import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
import { toast } from 'react-toastify'
export const fetchRoute = createAsyncThunk('route/fetchRoute', async () => {
  const { data } = await axios.get('/route')
  return data
})

const initialState = {
  route: null,
  status: 'loading',
}

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {},
  extraReducers: (route) => {
    route
      .addCase(fetchRoute.pending, (state) => {
        state.route = null
        state.status = 'loading'
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.route = action.payload
        state.status = 'loaded'
        toast.success('Вы успешно авторизовались!')
      })
      .addCase(fetchRoute.rejected, (state, action) => {
        state.route = null
        state.status = 'error'
        toast.error(action.error.message)
      })
  },
})

export const routeReducers = routeSlice.reducer
