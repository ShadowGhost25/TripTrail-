import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchRegister = createAsyncThunk(
  'register/fetchRegister',
  async (values) => {
    try {
      const { data } = await axios.post('/register', values)
      return data
    } catch (error) {
      throw new Error(error.response.data.error.msg)
    }
  },
)

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: null,
    status: 'loading',
    error: null,
  },
  reducers: {},
  extraReducers: (register) => {
    register
      .addCase(fetchRegister.pending, (state) => {
        state.data = []
        state.status = 'loading'
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'loaded'
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.data = null
        state.status = 'error'
        state.message = action.error.message
      })
  },
})

export const registerReducers = registerSlice.reducer
