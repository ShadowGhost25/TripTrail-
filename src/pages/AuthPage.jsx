import { Link } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import Logo from '../components/Logo'
import CustomInput from '../components/CustomInput'
import DarkMod from '../components/DarkMod'

const AuthPage = () => {
  const arrInput = [
    {
      htmlFor: 'Email',
      text: 'Email',
      type: 'email',
      id: 'Email',
      placeholder: 'test@triptrail.com',
    },
    {
      htmlFor: 'Password',
      text: 'Password',
      type: 'password',
      id: 'Password',
      placeholder: 'test',
    },
  ]
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="turism"
            src="https://images.wallpaperscraft.ru/image/single/gory_ozero_vershiny_119133_3840x2400.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>
        <main className="flex items-center justify-center px-6 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="bg-gray-200 rounded-md p-6  max-w-xl lg:max-w-3xl dark:bg-gray-800">
            <Logo />
            <DarkMod />
            <h1 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Авторизация
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Пожалуйста, войдите в свой аккаунт.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              {arrInput.map((item, index) => (
                <div key={index} className="col-span-6">
                  <CustomInput
                    htmlFor={item.htmlFor}
                    text={item.text}
                    type={item.type}
                    id={item.id}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}

              <p className="col-span-6 text-base text-gray-500 sm:mt-0 dark:text-gray-400">
                <Link
                  to="/register"
                  className="text-gray-700 underline dark:text-gray-200"
                >
                  Забыли пароль ?
                </Link>
              </p>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <div>
                  <CustomButton
                    index={5}
                    typeStyle={'primary'}
                    colorText={'1'}
                    text={'Авторизоваться'}
                  />
                </div>

                <p className="mt-4 text-base text-gray-500 sm:mt-0 dark:text-gray-400">
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
