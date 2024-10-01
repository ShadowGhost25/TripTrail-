import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Profile = () => {
  // Данные пользователя (в реальном приложении данные берутся из базы данных или API)
  const [user, setUser] = useState({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    createdRoutes: [
      { id: 1, name: 'Маршрут по Москве' },
      { id: 2, name: 'Тур по Санкт-Петербургу' },
    ],
  })

  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(user.name)
  const [newEmail, setNewEmail] = useState(user.email)

  // Обработчик изменения полей
  const handleSaveProfile = () => {
    setUser({
      ...user,
      name: newName,
      email: newEmail,
    })
    setIsEditing(false)
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Профиль</h1>

        <div className="mb-4">
          <h2 className="text-lg font-bold">Информация пользователя</h2>

          {isEditing ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Введите имя"
                  className="border p-2 w-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Введите email"
                  className="border p-2 w-full"
                />
              </div>

              <button
                onClick={handleSaveProfile}
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              >
                Сохранить
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Отмена
              </button>
            </div>
          ) : (
            <div>
              <p>
                <strong>Имя: </strong> {user.name}
              </p>
              <p>
                <strong>Email: </strong> {user.email}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Редактировать профиль
              </button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold">Мои маршруты</h2>
          {user.createdRoutes.length > 0 ? (
            <ul>
              {user.createdRoutes.map((route) => (
                <li key={route.id} className="mb-2">
                  <span className="text-blue-500 font-bold">{route.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Вы ещё не создали маршрутов.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
