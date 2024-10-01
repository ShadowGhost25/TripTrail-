import { useEffect, useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CustomButton from '../components/CustomButton'
import Divider from '../components/Divider'

const exampleRoutes = [
  {
    name: 'Маршрут по Москве',
    places: [
      { name: 'Красная площадь', lat: 55.753215, lng: 37.622504 },
      { name: 'Парк Горького', lat: 55.729875, lng: 37.605086 },
    ],
    note: 'Обязательно посетить в хорошую погоду',
    budget: { transport: 500, accommodation: 2000, food: 1000 },
  },
  {
    name: 'Тур по Санкт-Петербургу',
    places: [
      { name: 'Эрмитаж', lat: 59.939832, lng: 30.31456 },
      { name: 'Исаакиевский собор', lat: 59.9342802, lng: 30.3063091 },
    ],
    note: 'Хороший маршрут на выходные',
    budget: { transport: 1000, accommodation: 3000, food: 1200 },
  },
]

const ViewRoutes = () => {
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const calculateTotalBudget = (budget) => {
    return budget.transport + budget.accommodation + budget.food
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const button = document.getElementsByTagName('button')
    button[6].classList.add('pr-2')
  })

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
            {exampleRoutes.map((item, index) => (
              <div key={index} className="my-4">
                <CustomButton
                  key={item.id}
                  typeStyle={'primary'}
                  colorText={'1'}
                  click={() => setSelectedRoute(item)}
                  text={item.name}
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
                <h2 className="text-lg font-bold mb-1">Список мест</h2>
                {selectedRoute.places.map((place, index) => (
                  <li key={index} className="mb-2">
                    {place.name}
                  </li>
                ))}
              </div>
              <Divider />
              <div className="block-container">
                <h2 className="text-lg font-bold mb-1">Заметки</h2>
                <p>{selectedRoute.note}</p>
              </div>
              <Divider />
              <div className="block-container">
                <h2 className="text-lg font-bold mb-1">Бюджет поездки</h2>
                <li>Транспорт: {selectedRoute.budget.transport} рублей</li>
                <li>Жилье: {selectedRoute.budget.accommodation} рублей</li>
                <li>Питание: {selectedRoute.budget.food} рублей</li>
                <p className="font-bold mt-1">
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

export default ViewRoutes
