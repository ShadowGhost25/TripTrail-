import { Link } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import Logo from '../components/Logo'

const AuthPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="turism"
            src="/src/img/turism.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
        <main className="flex items-center justify-center px-6 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="bg-gray-200 rounded-md p-6  max-w-xl lg:max-w-3xl dark:bg-gray-900">
            <Logo />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Авторизация
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Пожалуйста, войдите в свой аккаунт.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block overflow-hidden rounded-md border  bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Email
                  </span>

                  <input
                    type="email"
                    id="Email"
                    placeholder="test@triptrail.com"
                    className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                  />
                </label>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className="block overflow-hidden rounded-md border  bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Password
                  </span>

                  <input
                    type="password"
                    id="password"
                    placeholder="test"
                    className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                  />
                </label>

                <p className="pt-2 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                  <Link
                    to="/register"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    Забыли пароль ?
                  </Link>
                </p>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <div>
                  <CustomButton
                    index={5}
                    typeStyle={'primary'}
                    colorText={'1'}
                    text={'Авторизоваться'}
                  />
                </div>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                  У вас нет аккаунта? &nbsp;
                  <Link
                    to="/register"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    Регистрация
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

export default AuthPage
