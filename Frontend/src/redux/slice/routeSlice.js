import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
import { Bounce, toast } from 'react-toastify'

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
export const fetchDelete = createAsyncThunk('route/fetchDelete', async (id) => {
  await axios.delete(`/route/${id}`)
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
        state.status = 'loading'
      })
      .addCase(fetchRoute.fulfilled, (state, action) => {
        state.route = action.payload
        state.status = 'loaded'
      })
      .addCase(fetchRoute.rejected, (state) => {
        state.status = 'error'
      })
      //!
      .addCase(fetchCreateRoute.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCreateRoute.fulfilled, (state, action) => {
        state.route = action.payload
        state.status = 'loaded'
      })
      .addCase(fetchCreateRoute.rejected, (state, action) => {
        state.status = 'error'
        toast.error(action.error.message, {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        })
      })
  },
})

export const routeReducers = routeSlice.reducer
