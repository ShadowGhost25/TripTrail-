import { useEffect, useState } from 'react'
import {
  Map,
  Placemark,
  ZoomControl,
  FullscreenControl,
  Clusterer,
  TypeSelector,
} from '@pbe/react-yandex-maps'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomButton from '../components/CustomButton'
import Divider from '../components/Divider'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slice/authSlice'
import NoAuth from '../components/NoAuth'
import LoadingSpinner from '../components/Loading'
import { fetchDelete } from '../redux/slice/routeSlice'
import { Bounce, toast } from 'react-toastify'

const ViewRoutes = () => {
  const isAuth = useSelector(selectIsAuth)
  const { status } = useSelector((state) => state.auth)
  const route = useSelector((state) => state.route)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoadingHome = route.status === 'loaded'
  const dispatch = useDispatch()

  const calculateTotalBudget = (budget) => {
    return budget[0].transport + budget[0].accommodation + budget[0].food
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (route.status === 'loaded') {
      const button = [...document.querySelectorAll('button')].find((el) =>
        el.textContent.includes('Список маршрутов'),
      )
      if (button) {
        button.classList.add('pr-2')
      }
    }
  }, [route])
  const handlePlacemarkClick = (place) => {
    setSelectedPlace(place)
  }

  // Установка центра карты при выборе места
  const getMapCenter = () => {
    return selectedPlace
      ? [selectedPlace.lat, selectedPlace.lng]
      : [selectedRoute.places[0].lat, selectedRoute.places[0].lng]
  }
  const handleRemove = (id) => {
    toast.info(
      <div>
        <span>Вы уверены, что хотите удалить маршрут?</span>
        <div>
          <button
            onClick={() => {
              dispatch(fetchDelete(id))
              window.location.reload()
              toast.dismiss() // Закрыть уведомление
            }}
            style={{ marginRight: '10px', color: 'green' }}
          >
            Удалить
          </button>
          <button
            style={{ marginRight: '10px', color: 'red' }}
            onClick={() => toast.dismiss()}
          >
            Отмена
          </button>
        </div>
      </div>,
      {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
        position: 'top-left',
        autoClose: false, // Уведомление не закроется автоматически
      },
    )
  }

  return (
    <>
      {!isLoadingHome && window.localStorage.getItem('token') ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className="div-container">
          <Header />
          <main className="main-container">
            <h1 className="title-style">Просмотр маршрутов</h1>
            {isAuth ? (
              <>
                {route.route.length > 0 ? (
                  <CustomButton
                    typeStyle={'burgermenu'}
                    click={toggleMenu}
                    svg={true}
                    text={'Список маршрутов'}
                  />
                ) : (
                  <article className="block-container">
                    <h2 className="test subtitle-style">
                      У вас пока нет маршрутов. Хотите создать ?
                    </h2>
                    <CustomButton
                      text={'Создать маршрут'}
                      typeStyle={'primary'}
                      colorText={'1'}
                      link={'/createroute'}
                    />
                  </article>
                )}

                <section className={`${isMenuOpen ? 'block' : 'hidden'}`}>
                  <ul className="max-h-[248px] overflow-y-auto">
                    {route.route.map((item, index) => (
                      <div key={index} className="my-4">
                        <CustomButton
                          key={item.id}
                          typeStyle={'primary'}
                          colorText={'1'}
                          click={() => setSelectedRoute(item)}
                          text={item.title}
                        />
                      </div>
                    ))}
                  </ul>
                  {selectedRoute && (
                    <>
                      <article className="block-container">
                        <h2 className="subtitle-style">
                          Детали маршрута: {selectedRoute.name}
                        </h2>
                        <Map
                          state={{
                            center: getMapCenter(),
                            zoom: 12,
                          }}
                          width="100%"
                          height="400px"
                        >
                          <Clusterer
                            options={{
                              preset: 'islands#invertedVioletClusterIcons',
                              groupByCoordinates: false,
                            }}
                          >
                            {selectedRoute.places.map((place, index) => (
                              <Placemark
                                key={index}
                                geometry={[place.lat, place.lng]}
                                properties={{
                                  balloonContent: place.name,
                                }}
                                options={{
                                  preset:
                                    selectedPlace === place
                                      ? 'islands#redCircleIcon'
                                      : 'islands#blueCircleIcon',
                                }}
                                onClick={() => handlePlacemarkClick(place)}
                              />
                            ))}
                          </Clusterer>
                          <FullscreenControl />
                          <ZoomControl />
                          <TypeSelector options={{ float: 'right' }} />
                        </Map>
                      </article>
                      <Divider />
                      <article className="block-container">
                        <h2 className="subtitle-style">Список мест</h2>
                        {selectedRoute.places.map((place, index) => (
                          <p
                            key={index}
                            onClick={() => handlePlacemarkClick(place)}
                            className={
                              selectedPlace === place
                                ? 'text-teal-800 dark:text-teal-400 mb-2 cursor-pointer'
                                : 'mb-2 cursor-pointer'
                            }
                          >
                            {place.name}
                          </p>
                        ))}
                      </article>
                      <Divider />
                      {selectedPlace && (
                        <>
                          <article className="block-container">
                            <h2 className="subtitle-style">
                              Информация о выбранном месте
                            </h2>
                            <p>Название: {selectedPlace.name}</p>
                            <p>
                              Координаты: {selectedPlace.lat},{' '}
                              {selectedPlace.lng}
                            </p>
                          </article>
                          <Divider />
                        </>
                      )}
                      <article className="block-container">
                        <h2 className="subtitle-style">Заметки</h2>
                        <p>{selectedRoute.notes}</p>
                      </article>
                      <Divider />
                      <article className="block-container">
                        <h2 className="subtitle-style">Бюджет поездки</h2>
                        <li className="mb-2">
                          Транспорт: {selectedRoute.arrBudget[0].transport}
                          &nbsp; рублей
                        </li>
                        <li className="mb-2">
                          Жилье: {selectedRoute.arrBudget[0].accommodation}
                          &nbsp; рублей
                        </li>
                        <li className="mb-2">
                          Питание: {selectedRoute.arrBudget[0].food}
                          &nbsp;рублей
                        </li>
                        <p className="font-bold mt-4">
                          Общий бюджет:&nbsp;
                          {calculateTotalBudget(selectedRoute.arrBudget)}
                          &nbsp;рублей
                        </p>
                      </article>
                      <div className="mt-4 md:w-[300px]">
                        {console.log(selectedRoute)}
                        <CustomButton
                          typeStyle={'cancellation'}
                          colorText={'4'}
                          text={'Удалить'}
                          click={() => handleRemove(selectedRoute._id)}
                        />
                      </div>
                    </>
                  )}
                </section>
              </>
            ) : (
              <>
                <NoAuth />
              </>
            )}
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default ViewRoutes
