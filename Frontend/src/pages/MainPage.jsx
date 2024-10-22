import { useEffect } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Bounce, toast } from 'react-toastify'
const MainPage = () => {
  useEffect(() => {
    // Проверяем флаг успешной авторизации
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (isAuthenticated === 'true') {
      // Удаляем флаг, чтобы уведомление показывалось только один раз
      localStorage.removeItem('isAuthenticated')

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
    }
  }, [])
  console.log(window.ymaps)
  return (
    <div className="div-container">
      <Header />
      <div className="main-container">
        <Banner />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
