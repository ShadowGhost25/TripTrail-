import { useEffect } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Bounce, toast } from 'react-toastify'
import LoadingSpinner from '../components/Loading'
import { useSelector } from 'react-redux'
const MainPage = () => {
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const isRegister = localStorage.getItem('isRegister')
    if (isAuthenticated) {
      toast.success('Вы успешно авторизовались', {
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
      localStorage.removeItem('isAuthenticated')
    }
    if (isRegister) {
      toast.success('Вы успешно зарегистрировались', {
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
      localStorage.removeItem('isRegister')
    }
  }, [])
  const { status } = useSelector((state) => state.auth)

  const isLoadingHome = status === 'loaded'
  return (
    <>
      {!isLoadingHome && window.localStorage.getItem('token') ? (
        <LoadingSpinner />
      ) : (
        <div className="div-container">
          <Header />
          <div className="main-container">
            <Banner />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default MainPage
