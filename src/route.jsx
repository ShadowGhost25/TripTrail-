import AboutUs from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'
import Register from './pages/Register'
import MainPage from './pages/MainPage'

export const route = [
  { path: '/', element: <MainPage /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/aboutus', element: <AboutUs /> },
  { path: '/register', element: <Register /> },
]
