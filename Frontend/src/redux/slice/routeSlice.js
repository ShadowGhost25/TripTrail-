import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchRoute = createAsyncThunk('route/fetchRoute', async (id) => {
  const { data } = await axios.get(`/route/${id}`)
  return data
})

export const fetchCreateRoute = createAsyncThunk(
  'create/fetchCreateRoute',
  async (params) => {
    try {
      const { data } = await axios.post('/route', params)
      return data
    } catch (error) {
      throw new Error(error.response.data.error.msg)
    }
  },
)
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
      //!
      .addCase(fetchCreateRoute.pending, (state) => {
        state.route = []
        state.status = 'loading'
      })
      .addCase(fetchCreateRoute.fulfilled, (state, action) => {
        state.route = action.payload
        state.status = 'loaded'
      })
      .addCase(fetchCreateRoute.rejected, (state) => {
        state.route = null
        state.status = 'error'
      })
  },
})

export const routeReducers = routeSlice.reducer
