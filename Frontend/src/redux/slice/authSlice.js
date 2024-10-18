import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Bounce, toast } from 'react-toastify'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchLogin', async (params) => {
  try {
    const { data } = await axios.post('/login', params)
    return data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/me')
  return data
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    id: null,
    status: 'loading',
  },
  reducers: {
    logout: (state) => {
      console.log(state.data)
      state.data = null
      toast.info('Вы вышли из аккаунта')
    },
  },
  extraReducers: (login) => {
    login
      .addCase(fetchAuth.pending, (state) => {
        state.data = null
        state.status = 'loading'
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'loaded'
        toast.success('Вы успешно авторизовались', {
          position: 'top-center',
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
      .addCase(fetchAuth.rejected, (state, action) => {
        state.data = null
        state.status = 'error'
        toast.error(action.error.message, {
          position: 'top-center',
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
      .addCase(fetchAuthMe.pending, (state) => {
        state.data = null
        state.status = 'loading'
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.data = action.payload
        state.id = action.payload._id
        state.status = 'loaded'
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.data = null
        state.status = 'error'
      })
  },
})

export const { logout } = authSlice.actions
export const selectIsAuth = (state) => Boolean(state.auth.data)
export const authReducers = authSlice.reducer
