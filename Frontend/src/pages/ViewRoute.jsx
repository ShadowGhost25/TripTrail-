import { useEffect, useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomButton from '../components/CustomButton'
import Divider from '../components/Divider'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoute } from '../redux/slice/routeSlice'
import LoadingSpinner from '../components/Loading'

const ViewRoutes = () => {
  const dispatch = useDispatch()
  const { route, status } = useSelector((state) => state.route)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRoute())
    }
  }, [dispatch, status])

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
  console.log(route)
  if (status === 'loading') {
    return <LoadingSpinner />
  } else {
    return (
      <div className="div-container">
        <Header />
        <main className="main-container">
          <h1 className="title-style">Просмотреть маршруты</h1>
          <CustomButton
            typeStyle={'burgermenu'}
            click={toggleMenu}
            svg={true}
            text={'Список маршрутов'}
          />
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
                  {console.log(selectedRoute.budget)}
                  <li>Транспорт: {selectedRoute.budget[0].transport} рублей</li>
                  <li>Жилье: {selectedRoute.budget[0].accommodation} рублей</li>
                  <li>Питание: {selectedRoute.budget[0].food} рублей</li>
                  <p className="font-bold mt-4">
                    Общий бюджет: {calculateTotalBudget(selectedRoute.budget)}
                    &nbsp;рублей
                  </p>
                </div>
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default ViewRoutes
