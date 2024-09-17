import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'

export const route = [
  { path: '/', element: <MainPage /> },
  { path: '/error', element: <ErrorPage /> },
]
