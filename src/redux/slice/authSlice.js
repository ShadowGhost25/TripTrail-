import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from '../../axios'

export const fetchAuth = createAsyncThunk(
  'login/fetchLogin',
  async (params) => {
    // Загрузка данных из локального файла JSON
    const response = await axios.get('../../publick.json')
    // Имитация проверки email и пароля
    const user = response.data
    if (user.email === params.email && user.password === params.password) {
      return { success: true } // Успешный ответ
    } else {
      throw new Error('Ошибка: неверный email или пароль') // Ошибка
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
        toast.success('Вы успешно авторизовались!')
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.data = null
        state.status = 'error'
        toast.error(action.error.message)
      })
  },
})

export const { logout } = authSlice.actions
export const authReducers = authSlice.reducer
