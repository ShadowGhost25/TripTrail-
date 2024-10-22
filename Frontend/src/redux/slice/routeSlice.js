import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchRoute = createAsyncThunk('route/fetchRoute', async (id) => {
  const { data } = await axios.get(`/route/${id}`)
  return data
})

const routeSlice = createSlice({
  name: 'route',
  initialState: {
    route: [],
    status: 'loading',
    error: null,
  },
  reducers: {},
  extraReducers: (route) => {
    route
      .addCase(fetchRoute.pending, (state) => {
        state.route = []
        state.status = 'loading'
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.route = action.payload
        state.status = 'loaded'
      })
      .addCase(fetchRoute.rejected, (state) => {
        state.route = null
        state.status = 'error'
      })
  },
})

export const routeReducers = routeSlice.reducer
