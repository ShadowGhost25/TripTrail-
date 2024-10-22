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

export const fetchUpdate = createAsyncThunk(
  'path/fetchUpdate',
  async (params) => {
    try {
      const { data } = await axios.patch(`/user/${params.id}`, params)
      return data
    } catch (error) {
      throw new Error(error.response.data.error.msg)
    }
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    id: null,
    status: 'loading',
  },
  reducers: {
    logout: (state) => {
      state.data = null
      toast.success('Вы вышли из аккаунта', {
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
        localStorage.setItem('isAuthenticated', 'true')
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
      //!
      .addCase(fetchAuthMe.pending, (state) => {
        state.data = null
        state.status = 'loading'
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.data = action.payload.userData
        state.id = action.payload.userData._id
        state.status = 'loaded'
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.data = null
        state.status = 'error'
      })
      //!
      .addCase(fetchUpdate.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUpdate.fulfilled, (state, action) => {
        state.status = 'loaded'
        state.data = action.payload
      })
      .addCase(fetchUpdate.rejected, (state, action) => {
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

export const { logout } = authSlice.actions
export const selectIsAuth = (state) => Boolean(state.auth.data)
export const authReducers = authSlice.reducer
