import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import DarkMod from '../components/DarkMod'

const RegisterPage = () => {
  const arrInput = [
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'FirstName',
      text: 'Имя',
      type: 'text',
      id: 'FirstName',
      placeholder: 'Имя',
    },
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'LastName',
      text: 'Фамилия',
      type: 'text',
      id: 'LastName',
      placeholder: 'Фамилия',
    },
    {
      typeStyle: 'col-span-6',
      htmlFor: 'Email',
      text: 'Email',
      type: 'email',
      id: 'Email',
      placeholder: 'test@triptrail.com',
    },
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'Password',
      text: 'Пароль',
      type: 'password',
      id: 'Password',
      placeholder: '123456',
    },
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'PasswordConfirmation',
      text: 'Повторный пароль',
      type: 'password',
      id: 'PasswordConfirmation',
      placeholder: '123456',
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

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="bg-gray-200 rounded-md p-6  max-w-xl lg:max-w-3xl dark:bg-gray-900">
            <Logo />
            <DarkMod />
            <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Добро пожаловать!
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
              Мы рады, что вы решили присоединиться к нам. Создайте аккаунт,
              чтобы воспользоваться нашим сайтом.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              {arrInput.map((item, index) => (
                <div key={index} className={item.typeStyle}>
                  <CustomInput
                    htmlFor={item.htmlFor}
                    text={item.text}
                    type={item.type}
                    id={item.id}
                    placeholder={item.placeholder}
                  />
                </div>
              ))}

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md  "
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
