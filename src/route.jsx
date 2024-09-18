import AboutUs from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import MainPage from './pages/MainPage'

export const route = [
  { path: '/', element: <MainPage /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/aboutus', element: <AboutUs /> },
  { path: '/login', element: <Login /> },
]
