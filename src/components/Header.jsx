import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className=" dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
        <Link className="block w-26 h-auto dark:text-teal-300" to="/">
          <img src="/src/img/logo.png" alt="logo" />
        </Link>
        <div className="flex flex-1 items-center justify-center md:justify-between md:flex">
          <nav
            aria-label="Global"
            className=" size-full hidden lg:flex justify-center"
          >
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white dark:hover:text-gray-500 transition"
                  to="/profile"
                >
                  Профиль
                </Link>
              </li>
              <li>
                <Link
                  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white dark:hover:text-gray-500 transition"
                  to="#"
                >
                  Создать маршрут
                </Link>
              </li>
              <li>
                <Link
                  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white dark:hover:text-gray-500 transition"
                  to="#"
                >
                  Просмотреть маршруты
                </Link>
              </li>
              <li>
                <Link
                  className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white dark:hover:text-gray-500 transition"
                  to="/aboutus"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
              to="/login"
            >
              Авторизация
            </Link>

            <Link
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              to="/register"
            >
              Регистрация
            </Link>
          </div>

          <button
            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`mx-auto box-border ${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}
      >
        <ul className="divide-y dark:divide-gray-800">
          <li>
            <a
              href="#"
              className="block py-2 px-6  text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              Профиль
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-6  text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              Создать маршрут
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-6  text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              Просмотреть маршруты
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-6  text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200"
            >
              О нас
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
