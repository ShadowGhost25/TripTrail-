import AboutUs from './pages/AboutUsPage'
import ErrorPage from './pages/ErrorPage'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import AuthPage from './pages/AuthPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import CreateRoute from './pages/CreateRoute'
import ViewRoutes from './pages/ViewRoute'
import Profile from './pages/Profile'

export const route = [
  { path: '/', element: <MainPage /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/aboutus', element: <AboutUs /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/privacypolicy', element: <PrivacyPolicyPage /> },
  { path: '/faq', element: <FaqPage /> },
  { path: '/contacts', element: <ContactPage /> },
  { path: '/createroute', element: <CreateRoute /> },
  { path: '/viewroute', element: <ViewRoutes /> },
  { path: '/profile', element: <Profile /> },
]
