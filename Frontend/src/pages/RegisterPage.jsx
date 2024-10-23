import { Link, Navigate } from 'react-router-dom'
import Logo from '../components/Logo'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import DarkMod from '../components/DarkMod'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slice/authSlice'
import { fetchRegister } from '../redux/slice/registerSlice'
import { Bounce, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: 'Илья',
      lastName: 'Вавилин',
      email: 'ilyushavavi@gmail.com',
      password: '12345678',
      repeatPassword: '12345678',
    },
    mode: 'onChange',
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))
    if (!data.error) {
      window.localStorage.setItem('token', data.payload.token)
      localStorage.setItem('isRegister', 'true')
      window.location.reload()
    } else {
      toast.error(data.error.message, {
        position: 'top-right',
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
  }

  const arrInput = [
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'firstName',
      text: 'Имя',
      type: 'text',
      id: 'firstName',
      placeholder: 'Имя',
      value: { required: 'Укажите Имя' },
    },
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'lastName',
      text: 'Фамилия',
      type: 'text',
      id: 'lastName',
      placeholder: 'Фамилия',
      value: { required: 'Укажите Фамилию' },
    },
    {
      typeStyle: 'col-span-6',
      htmlFor: 'email',
      text: 'Email',
      type: 'email',
      id: 'email',
      placeholder: 'test@triptrail.com',
      value: { required: 'Укажите почту' },
    },
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'password',
      text: 'Пароль',
      type: 'password',
      id: 'password',
      placeholder: '12345678',
      value: { required: 'Укажите пароль' },
    },
    {
      typeStyle: 'col-span-6 sm:col-span-3',
      htmlFor: 'repeatPassword',
      text: 'Повторный пароль',
      type: 'password',
      id: 'repeatPassword',
      placeholder: '12345678',
      value: { required: 'Укажите пароль' },
    },
  ]
  if (isAuth) {
    return <Navigate to="/" />
  }
  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="tourism"
              src="https://images.wallpaperscraft.ru/image/single/gory_ozero_vershiny_119133_3840x2400.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="block-container">
              <Logo />
              <DarkMod />
              <h1 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                Добро пожаловать!
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                Мы рады, что вы решили присоединиться к нам. Создайте аккаунт,
                чтобы воспользоваться нашим сайтом.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                {arrInput.map((item, index) => (
                  <div key={index} className={item.typeStyle}>
                    <CustomInput
                      htmlFor={item.htmlFor}
                      text={item.text}
                      type={item.type}
                      id={item.id}
                      placeholder={item.placeholder}
                      register={register}
                      validation={item.value}
                      error={errors[item.id]}
                    />
                  </div>
                ))}

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md"
                    />
                    <span className="text-base text-gray-700 dark:text-gray-200">
                      Я хочу получать электронные письма о мероприятиях,
                      обновлениях продуктов и объявлениях компании.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Создавая учетную запись, вы соглашаетесь с нашими &nbsp;
                    <Link
                      to="/privacypolicy"
                      className="text-gray-700 underline dark:text-gray-200"
                    >
                      политикой конфиденциальности.
                    </Link>
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <div>
                    <CustomButton
                      index={5}
                      typeStyle={'primary'}
                      colorText={'1'}
                      text={'Зарегистрироваться'}
                      type="submit"
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
    </>
  )
}

export default RegisterPage
