import { lazy } from 'react'

const MainPage = lazy(() => import('./pages/MainPage'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const AuthPage = lazy(() => import('./pages/AuthPage'))
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CreateRoute = lazy(() => import('./pages/CreateRoute'))
const ViewRoutes = lazy(() => import('./pages/ViewRoute'))
const Profile = lazy(() => import('./pages/Profile'))

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
