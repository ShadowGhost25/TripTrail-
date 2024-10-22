import { useEffect, useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomButton from '../components/CustomButton'
import Divider from '../components/Divider'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/Loading'
import { selectIsAuth } from '../redux/slice/authSlice'
import NoAuth from '../components/NoAuth'

const ViewRoutes = () => {
  const isAuth = useSelector(selectIsAuth)

  const { route, status, idRouteUser } = useSelector((state) => state.route)
  const { id } = useSelector((state) => state.auth)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(idRouteUser + ' sada ' + id)

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
  if (status === 'loading') {
    return <LoadingSpinner />
  } else {
    return (
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
                      <YMaps>
                        <Map
                          defaultState={{
                            center: [
                              selectedRoute.places[0].lat,
                              selectedRoute.places[0].lng,
                            ],
                            zoom: 12,
                          }}
                          width=""
                          height="400px"
                        >
                          {selectedRoute.places.map((place, index) => (
                            <Placemark
                              key={index}
                              geometry={[place.lat, place.lng]}
                              properties={{
                                hintContent: place.name,
                                balloonContent: place.name,
                              }}
                              options={{
                                preset: 'islands#blueCircleIcon',
                              }}
                            />
                          ))}
                        </Map>
                      </YMaps>
                    </div>
                    <Divider />
                    <div className="block-container">
                      <h2 className="subtitle-style">Список мест</h2>
                      {selectedRoute.places.map((place, index) => (
                        <li key={index} className="mb-2">
                          {place.name}
                        </li>
                      ))}
                    </div>
                    <Divider />
                    <div className="block-container">
                      <h2 className="subtitle-style">Заметки</h2>
                      <p>{selectedRoute.notes}</p>
                    </div>
                    <Divider />
                    <div className="block-container">
                      <h2 className="subtitle-style">Бюджет поездки</h2>
                      <li>
                        Транспорт: {selectedRoute.budget[0].transport} рублей
                      </li>
                      <li>
                        Жилье: {selectedRoute.budget[0].accommodation} рублей
                      </li>
                      <li>Питание: {selectedRoute.budget[0].food} рублей</li>
                      <p className="font-bold mt-4">
                        Общий бюджет:{' '}
                        {calculateTotalBudget(selectedRoute.budget)}
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
    )
  }
}

export default ViewRoutes
