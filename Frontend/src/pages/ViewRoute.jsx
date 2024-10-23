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
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slice/authSlice'
import NoAuth from '../components/NoAuth'
import LoadingSpinner from '../components/Loading'

const ViewRoutes = () => {
  const isAuth = useSelector(selectIsAuth)
  const { route, status } = useSelector((state) => state.route)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoadingHome = status === 'loaded'

  const calculateTotalBudget = (budget) => {
    return budget[0].transport + budget[0].accommodation + budget[0].food
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (status === 'loaded') {
      const button = [...document.querySelectorAll('button')].find((el) =>
        el.textContent.includes('Список маршрутов'),
      )
      if (button) {
        button.classList.add('pr-2')
      }
    }
  }, [status])
  const handlePlacemarkClick = (place) => {
    setSelectedPlace(place)
  }

  // Установка центра карты при выборе места
  const getMapCenter = () => {
    return selectedPlace
      ? [selectedPlace.lat, selectedPlace.lng]
      : [selectedRoute.places[0].lat, selectedRoute.places[0].lng]
  }

  return (
    <>
      {!isLoadingHome && window.localStorage.getItem('token') ? (
        <LoadingSpinner />
      ) : (
        <div className="div-container">
          <Header />
          <main className="main-container">
            <h1 className="title-style">Просмотр маршрутов</h1>
            {isAuth ? (
              <>
                {route.length !== 0 ? (
                  <CustomButton
                    typeStyle={'burgermenu'}
                    click={toggleMenu}
                    svg={true}
                    text={'Список маршрутов'}
                  />
                ) : (
                  <div className="block-container">
                    <h2 className="test subtitle-style">
                      У вас пока нет маршрутов. Хотите создать ?
                    </h2>
                    <CustomButton
                      text={'Создать маршрут'}
                      typeStyle={'primary'}
                      colorText={'1'}
                      link={'/createroute'}
                    />
                  </div>
                )}

                <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
                  <ul>
                    {route.map((item, index) => (
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
                      <div className="block-container">
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
                      </div>
                      <Divider />
                      <div className="block-container">
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
                      </div>
                      <Divider />
                      {selectedPlace && (
                        <>
                          <div className="block-container">
                            <h2 className="subtitle-style">
                              Информация о выбранном месте
                            </h2>
                            <p>Название: {selectedPlace.name}</p>
                            <p>
                              Координаты: {selectedPlace.lat},{' '}
                              {selectedPlace.lng}
                            </p>
                          </div>
                          <Divider />
                        </>
                      )}
                      <div className="block-container">
                        <h2 className="subtitle-style">Заметки</h2>
                        <p>{selectedRoute.notes}</p>
                      </div>
                      <Divider />
                      <div className="block-container">
                        <h2 className="subtitle-style">Бюджет поездки</h2>
                        <li>
                          Транспорт: {selectedRoute.arrBudget[0].transport}{' '}
                          рублей
                        </li>
                        <li>
                          Жилье: {selectedRoute.arrBudget[0].accommodation}{' '}
                          рублей
                        </li>
                        <li>
                          Питание: {selectedRoute.arrBudget[0].food} рублей
                        </li>
                        <p className="font-bold mt-4">
                          Общий бюджет:{' '}
                          {calculateTotalBudget(selectedRoute.arrBudget)}
                          &nbsp;рублей
                        </p>
                      </div>
                    </>
                  )}
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

export default ViewRoutes
