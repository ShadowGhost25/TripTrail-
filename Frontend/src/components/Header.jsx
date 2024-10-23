import { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'
import Logo from './Logo'
import DarkMod from './DarkMod'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slice/authSlice'

function Header() {
  const isAuth = useSelector(selectIsAuth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navArr = [
    { title: 'Профиль', link: '/profile' },
    { title: 'Создать маршрут', link: '/createroute' },
    { title: 'Просмотреть маршруты', link: '/viewroute' },
  ]
  const navArrBurgerMenu = isAuth
    ? [
        { title: 'Профиль', link: '/profile' },
        { title: 'Создать маршрут', link: '/createroute' },
        { title: 'Просмотреть маршруты', link: '/viewroute' },
      ]
    : [
        { title: 'Профиль', link: '/profile' },
        { title: 'Создать маршрут', link: '/createroute' },
        { title: 'Просмотреть маршруты', link: '/viewroute' },
        { title: 'Авторизоваться', link: '/auth' },
        { title: 'Зарегистрироваться', link: '/register' },
      ]
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="mt-4 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <div>
          <Logo />
          <DarkMod />
        </div>
        <div className="min-h-[84px] flex-1">
          <nav
            aria-label="Global"
            className=" size-full hidden lg:flex justify-center"
          >
            <ul className="flex px-4 items-center gap-3 sm:text-sm">
              {navArr.map((item, index) => (
                <CustomButton
                  key={index}
                  text={item.title}
                  link={item.link}
                  typeStyle={'navbar'}
                />
              ))}
            </ul>
          </nav>
        </div>

        <div className="min-h-[84px] flex  gap-4 ">
          {!isAuth && (
            <>
              <div className="hidden lg:block">
                <CustomButton
                  index={1}
                  text={'Авторизация'}
                  typeStyle={'primary'}
                  colorText={'1'}
                  link={'/auth'}
                />
              </div>
              <div className="hidden  lg:block">
                <CustomButton
                  index={2}
                  text={'Регистрация'}
                  typeStyle={'normal'}
                  link={'/register'}
                />
              </div>
            </>
          )}

          <div className="lg:hidden">
            <CustomButton
              index={3}
              typeStyle={'burgermenu'}
              click={toggleMenu}
              svg={true}
            />
          </div>
        </div>
      </div>
      <div
        className={`mx-auto box-border ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}
      >
        <ul className="divide-y dark:divide-gray-800">
          {navArrBurgerMenu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="block py-2 px-6 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
