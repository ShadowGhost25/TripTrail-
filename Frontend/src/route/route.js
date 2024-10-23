import ErrorPage from '../pages/ErrorPage'
import MainPage from '../pages/MainPage.jsx'
import AboutUsPage from '../pages/AboutUsPage'
import RegisterPage from '../pages/RegisterPage'
import AuthPage from '../pages/AuthPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import FaqPage from '../pages/FaqPage'
import ContactPage from '../pages/ContactPage'
import CreateRoute from '../pages/CreateRoute'
import Profile from '../pages/Profile'
import ViewRoutes from '../pages/ViewRoute'

export const route = [
  { path: '/', element: <MainPage /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/aboutus', element: <AboutUsPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/privacypolicy', element: <PrivacyPolicyPage /> },
  { path: '/faq', element: <FaqPage /> },
  { path: '/contacts', element: <ContactPage /> },
  { path: '/createroute', element: <CreateRoute /> },
  { path: '/viewroute', element: <ViewRoutes /> },
  { path: '/profile', element: <Profile /> },
]
