import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
import Divider from '../components/Divider'
import { logout, selectIsAuth } from '../redux/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import NoAuth from '../components/NoAuth'

const Profile = () => {
  const isAuth = useSelector(selectIsAuth)
  const { data } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)

  // Проверяем, существует ли userData и устанавливаем значения по умолчанию
  const userData = data?.userData || { firstName: '', lastName: '', email: '' }

  const [user, setUser] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    createdRoutes: [
      { id: 1, name: 'Маршрут по Москве' },
      { id: 2, name: 'Тур по Санкт-Петербургу' },
    ],
  })

  const [newFirstName, setFirstName] = useState(user.firstName)
  const [newLastName, setLastName] = useState(user.lastName)
  const [newEmail, setNewEmail] = useState(user.email)

  useEffect(() => {
    // Обновляем состояние user, когда data изменяется
    setUser((prevUser) => ({
      ...prevUser,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    }))
  }, [data]) // Зависимость для обновления при изменении data

  const arrForm = [
    {
      htmlFor: 'FirstName',
      text: 'Имя',
      type: 'text',
      id: 'FirstName',
      placeholder: 'Редактировать Имя',
      value: newFirstName,
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      htmlFor: 'LastName',
      text: 'Фамилия',
      type: 'text',
      id: 'LastName',
      placeholder: 'Редактировать Фамилию',
      value: newLastName,
      onChange: (e) => setLastName(e.target.value),
    },
    {
      htmlFor: 'Email',
      text: 'Email',
      type: 'email',
      id: 'Email',
      placeholder: 'Редактировать email',
      value: newEmail,
      onChange: (e) => setNewEmail(e.target.value),
    },
  ]

  const handleSaveProfile = () => {
    setUser({
      ...user,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
    })
    setIsEditing(false)
  }

  const logoutClick = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
  }
  return (
    <div className="div-container">
      <Header />
      <main className="main-container">
        <h1 className="title-style">Профиль</h1>
        {isAuth ? (
          <>
            <div className="mb-4">
              {isEditing ? (
                <div className="block-container">
                  <h2 className="subtitle-style">
                    Редактирование пользователя
                  </h2>
                  {arrForm.map((item, index) => (
                    <div key={index} className="mb-4">
                      <CustomInput
                        htmlFor={item.htmlFor}
                        text={item.text}
                        type={item.type}
                        id={item.id}
                        newValue={item.value}
                        placeholder={item.placeholder}
                        onChange={item.onChange}
                      />
                    </div>
                  ))}
                  <div className="w-[280px] flex justify-between">
                    <div className="mb-4">
                      <CustomButton
                        click={handleSaveProfile}
                        text="Сохранить"
                        typeStyle="primary"
                        colorText="1"
                      />
                    </div>
                    <div>
                      <CustomButton
                        click={() => setIsEditing(false)}
                        text="Отмена"
                        typeStyle="cancellation"
                        colorText={'4'}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="block-container">
                  <h2 className="subtitle-style">Информация пользователя</h2>
                  <p>
                    <strong>Имя: </strong> {user.firstName}
                  </p>
                  <p>
                    <strong>Фамилия: </strong> {user.lastName}
                  </p>
                  <p>
                    <strong>Email: </strong> {user.email}
                  </p>
                  <div className=" mt-4 w-[250px]">
                    <CustomButton
                      click={() => setIsEditing(true)}
                      text={'Редактировать профиль'}
                      typeStyle={'primary'}
                      colorText={'1'}
                    />
                  </div>
                  <div className=" mt-4 w-[250px]">
                    <CustomButton
                      click={() => logoutClick()}
                      text={'Выйти'}
                      typeStyle={'primary'}
                      colorText={'1'}
                    />
                  </div>
                </div>
              )}
            </div>
            <Divider />
            <div className="block-container">
              <h2 className="subtitle-style">Мои маршруты</h2>
              {user.createdRoutes.length > 0 ? (
                <ul>
                  {user.createdRoutes.map((route) => (
                    <li key={route.id} className="mb-2">
                      <Link
                        to={'/viewroute'}
                        className="text-teal-600 font-bold"
                      >
                        {route.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Вы ещё не создали маршрутов.</p>
              )}
            </div>
          </>
        ) : (
          <NoAuth />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Profile
