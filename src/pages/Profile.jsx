import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
import Divider from '../components/Divider'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [user, setUser] = useState({
    firstName: 'Илья',
    lastName: 'Вавилин',
    email: 'test@test.com',
    createdRoutes: [
      { id: 1, name: 'Маршрут по Москве' },
      { id: 2, name: 'Тур по Санкт-Петербургу' },
    ],
  })
  const [newFirstName, setFirstName] = useState(user.firstName)
  const [newLastName, setLastName] = useState(user.lastName)
  const [newEmail, setNewEmail] = useState(user.email)
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
      fistName: newFirstName,
      lastName: newLastName,
      email: newEmail,
    })
    setIsEditing(false)
  }

  return (
    <div className="div-container">
      <Header />
      <main className="main-container">
        <h1 className="title-style">Профиль</h1>

        <div className="mb-4">
          {isEditing ? (
            <div className="block-container">
              <h2 className="subtitle-style">Редактирование пользователя</h2>
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
                  <Link to={'/viewroute'} className="text-teal-600 font-bold">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Вы ещё не создали маршрутов.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
