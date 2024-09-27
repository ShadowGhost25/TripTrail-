import { useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Пример списка маршрутов (данные могут поступать из базы данных или API)
const exampleRoutes = [
  {
    id: 1,
    name: 'Маршрут по Москве',
    places: [
      { name: 'Красная площадь', lat: 55.753215, lng: 37.622504 },
      { name: 'Парк Горького', lat: 55.729875, lng: 37.605086 },
    ],
    note: 'Обязательно посетить в хорошую погоду',
    budget: { transport: 500, accommodation: 2000, food: 1000 },
  },
  {
    id: 2,
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

  const calculateTotalBudget = (budget) => {
    return budget.transport + budget.accommodation + budget.food
  }

  return (
    <>
      <Header />
      <main className="mx-auto my-4 px-4 max-w-custom-xl items-center gap-8 dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:px-6 lg:px-8 xl:px-0">
        <h1 className="text-2xl font-bold mb-4">Просмотреть маршруты</h1>

        <div className="mb-4">
          <h2 className="text-lg font-bold">Список маршрутов</h2>
          <ul>
            {exampleRoutes.map((route) => (
              <li
                key={route.id}
                className={`cursor-pointer mb-2 p-2 border rounded ${
                  selectedRoute?.id === route.id ? 'bg-blue-100' : ''
                }`}
                onClick={() => setSelectedRoute(route)}
              >
                {route.name}
              </li>
            ))}
          </ul>
        </div>

        {selectedRoute && (
          <div className="mb-4">
            <h2 className="text-lg font-bold">
              Детали маршрута: {selectedRoute.name}
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Места на карте
              </label>
              <YMaps>
                <Map
                  defaultState={{
                    center: [
                      selectedRoute.places[0].lat,
                      selectedRoute.places[0].lng,
                    ],
                    zoom: 10,
                  }}
                  width="100%"
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

            <div className="mb-4">
              <h3 className="text-lg font-bold">Список мест</h3>
              <ul>
                {selectedRoute.places.map((place, index) => (
                  <li key={index} className="mb-2">
                    {place.name} (Широта: {place.lat}, Долгота: {place.lng})
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold">Заметки</h3>
              <p>{selectedRoute.note}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold">Бюджет поездки</h3>
              <p>Транспорт: {selectedRoute.budget.transport} рублей</p>
              <p>Жилье: {selectedRoute.budget.accommodation} рублей</p>
              <p>Питание: {selectedRoute.budget.food} рублей</p>
              <p className="font-bold">
                Общий бюджет: {calculateTotalBudget(selectedRoute.budget)}{' '}
                рублей
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default ViewRoutes
