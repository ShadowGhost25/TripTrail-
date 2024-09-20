import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import CustomButton from '../components/CustomButton'

const RegisterPage = () => {
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

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="bg-gray-200 rounded-md p-6  max-w-xl lg:max-w-3xl dark:bg-gray-900">
            <Logo />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Добро пожаловать!
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Мы рады, что вы решили присоединиться к нам. Создайте аккаунт,
              чтобы воспользоваться нашим сайтом.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block overflow-hidden rounded-md border bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Имя
                  </span>

                  <input
                    type="text"
                    id="FirstName"
                    placeholder="Имя"
                    className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                  />
                </label>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block overflow-hidden rounded-md border bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Фамилия
                  </span>

                  <input
                    type="text"
                    id="LastName"
                    placeholder="Фамилия"
                    className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                  />
                </label>
              </div>

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

              <div className="col-span-6 sm:col-span-3">
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
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block overflow-hidden rounded-md border bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                    Password
                  </span>

                  <input
                    type="password"
                    id="PasswordConfirmation"
                    placeholder="test"
                    className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                  />
                </label>
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className=" size-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                  />

                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Я хочу получать электронные письма о мероприятиях,
                    обновлениях продуктов и объявлениях компании.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Создавая учетную запись, вы соглашаетесь с нашимей
                  <Link
                    to="/privacypolicy"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    &nbsp; политикой конфиденциальности.
                  </Link>
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <div>
                  <CustomButton
                    index={5}
                    typeStyle={'primary'}
                    colorText={'1'}
                    text={'Зарегестрироваться'}
                  />
                </div>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                  У вас уже есть аккаунт? &nbsp;
                  <Link
                    to="/auth"
                    className="text-gray-700 underline dark:text-gray-200"
                  >
                    Авторизация
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

export default RegisterPage
