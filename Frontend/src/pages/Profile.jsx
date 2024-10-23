import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { Link } from 'react-router-dom'
import Divider from '../components/Divider'
import { fetchUpdate, logout, selectIsAuth } from '../redux/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import NoAuth from '../components/NoAuth'
import { Bounce, toast } from 'react-toastify'
import LoadingSpinner from '../components/Loading'

const Profile = () => {
  const isAuth = useSelector(selectIsAuth)
  const { data, id } = useSelector((state) => state.auth)
  const { route, status } = useSelector((state) => state.route)
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState(data?.firstName || '')
  const [lastName, setLastName] = useState(data?.lastName || '')
  const [email, setEmail] = useState(data?.email || '')

  const arrForm = [
    {
      htmlFor: 'FirstName',
      text: 'Имя',
      type: 'text',
      id: 'FirstName',
      value: firstName,
      placeholder: 'Редактировать Имя',
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      htmlFor: 'LastName',
      text: 'Фамилия',
      type: 'text',
      id: 'LastName',
      value: lastName,
      placeholder: 'Редактировать Фамилию',
      onChange: (e) => setLastName(e.target.value),
    },
    {
      htmlFor: 'Email',
      text: 'Email',
      type: 'email',
      id: 'Email',
      value: email,
      placeholder: 'Редактировать email',
      onChange: (e) => setEmail(e.target.value),
    },
  ]
  useEffect(() => {
    const isProfileUpdated = localStorage.getItem('profileUpdateSuccess')
    if (isProfileUpdated) {
      toast.success('Вы обновили данные', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      })
      localStorage.removeItem('profileUpdateSuccess')
    }
  }, [])
  const handleClick = async () => {
    const params = { firstName, lastName, email, id }
    const data = await dispatch(fetchUpdate(params))
    if (data.payload !== undefined) {
      localStorage.setItem('profileUpdateSuccess', 'true')
      window.location.reload()
    }
  }

  const logoutClick = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
  }
  const isLoadingHome = status === 'loaded'

  return (
    <>
      {!isLoadingHome && window.localStorage.getItem('token') ? (
        <LoadingSpinner />
      ) : (
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
                            text="Сохранить"
                            typeStyle="primary"
                            colorText="1"
                            click={handleClick}
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
                      <h2 className="subtitle-style">
                        Информация пользователя
                      </h2>
                      <p>
                        <strong>Имя: </strong> {data.firstName}
                      </p>
                      <p>
                        <strong>Фамилия: </strong> {data.lastName}
                      </p>
                      <p>
                        <strong>Email: </strong> {data.email}
                      </p>
                      <div className="mt-4 w-[250px]">
                        <CustomButton
                          click={() => setIsEditing(true)}
                          text={'Редактировать профиль'}
                          typeStyle={'primary'}
                          colorText={'1'}
                        />
                      </div>
                      <div className="mt-4 w-[250px]">
                        <CustomButton
                          click={logoutClick}
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
                  {status === 'loaded' &&
                    (route.length > 0 ? (
                      <>
                        <h2 className="subtitle-style">Мои маршруты</h2>
                        <ul>
                          {route.map((routeItem) => (
                            <li key={routeItem._id} className="mb-2">
                              <Link
                                to={'/viewroute'}
                                className="text-teal-600 font-bold"
                              >
                                {routeItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h2 className="test subtitle-style">
                          У вас пока нет маршрутов. Хотите создать?
                        </h2>
                        <CustomButton
                          text={'Создать маршрут'}
                          typeStyle={'primary'}
                          colorText={'1'}
                          link={'/createroute'}
                        />
                      </>
                    ))}
                </div>
              </>
            ) : (
              <NoAuth />
            )}
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Profile
