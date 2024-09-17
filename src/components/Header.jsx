import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" href="#">
          <Link className="block text-teal-600 dark:text-teal-600" href="/">
            <img className="w-10" src="../../icon.png" alt="icon" />
          </Link>
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/profile"
                >
                  Профиль
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="#"
                >
                  Создать маршрут
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="#"
                >
                  Ваши маршруты
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="#"
                >
                  О нас
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                to="/login"
              >
                Авторизация
              </Link>

              <Link
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                to="/register"
              >
                Регистрация
              </Link>
            </div>
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
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
      </div>
    </header>
  )
}

export default Header
