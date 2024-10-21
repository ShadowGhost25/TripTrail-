import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'
import { Bounce, toast } from 'react-toastify'

export const fetchRegister = createAsyncThunk(
  'register/fetchRegister',
  async (values) => {
    try {
      const { data } = await axios.post('/register', values)
      return data
    } catch (error) {
      console.log(error.response.data)
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
        state.message = 'Регистрация успешна!'
        toast.success('Вы успешно зарегистрировались', {
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
      .addCase(fetchRegister.rejected, (state, action) => {
        state.data = null
        state.status = 'error'
        state.message = action.error.message
      })
  },
})

export const registerReducers = registerSlice.reducer
