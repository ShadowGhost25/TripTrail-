import { useState } from 'react'
import { Map, Placemark } from '@pbe/react-yandex-maps'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import Divider from '../components/Divider'

const CreateRoute = () => {
  const [places, setPlaces] = useState([])
  const [budget, setBudget] = useState({
    transport: 0,
    accommodation: 0,
    food: 0,
  })
  const [note, setNote] = useState('')
  const [selectedPlace, setSelectedPlace] = useState(null)

  const addPlace = (coords) => {
    const newPlace = {
      name: 'Новое место',
      lat: coords[0],
      lng: coords[1],
    }
    setPlaces([...places, newPlace])
  }

  const handleMapClick = (e) => {
    const coords = e.get('coords')
    addPlace(coords)
  }

  const handlePlaceClick = (place) => {
    setSelectedPlace(place) // Выбираем место при клике
  }

  const calculateBudget = () => {
    const total = budget.transport + budget.accommodation + budget.food
    return total
  }
  const arrInput = [
    {
      id: 'Transport',
      text: 'Транспорт',
      value: budget.transport,
      onChange: (e) =>
        setBudget({
          ...budget,
          transport: parseFloat(e.target.value),
        }),
    },
    {
      id: 'Housing',
      text: 'Жилье',
      value: budget.accommodation,
      onChange: (e) =>
        setBudget({
          ...budget,
          accommodation: parseFloat(e.target.value),
        }),
    },
    {
      id: 'Nutrition',
      text: 'Питание',
      value: budget.food,
      onChange: (e) =>
        setBudget({ ...budget, food: parseFloat(e.target.value) }),
    },
  ]
  return (
    <>
      <Header />
      <main className="main-container">
        <h1 className="title-style">Создать маршрут</h1>
        <article className="block-container">
          <CustomInput
            htmlFor="Nameroute"
            text="Название маршрута"
            type="text"
            id="Nameroute"
            placeholder="Введите название маршрута"
          />
        </article>
        <Divider />
        <article className="block-container">
          <label className="block text-lg font-bold mb-4">Добавить места</label>
          <Map
            defaultState={{ center: [55.751244, 37.618423], zoom: 10 }} // Москва по умолчанию
            width="100%"
            height="400px"
            onClick={handleMapClick}
          >
            {places.map((place, index) => (
              <Placemark
                key={index}
                geometry={[place.lat, place.lng]}
                onClick={() => handlePlaceClick(place)} // При клике на маркер выбираем место
                options={{
                  preset:
                    selectedPlace === place
                      ? 'islands#redIcon'
                      : 'islands#blueIcon', // Выделяем выбранное место
                }}
              />
            ))}
          </Map>
        </article>
        <Divider />
        <article className="block-container">
          <h2 className="subtitle-style">Список мест</h2>
          <ul>
            {places.map((place, index) => (
              <li
                key={index}
                className={`mb-2 cursor-pointer ${
                  selectedPlace === place ? 'font-bold text-teal-500' : ''
                }`}
                onClick={() => handlePlaceClick(place)}
              >
                {place.name} (Широта: {place.lat}, Долгота: {place.lng})
              </li>
            ))}
          </ul>
        </article>
        <Divider />
        {selectedPlace && (
          <>
            <div className="block-container">
              <h2 className="subtitle-style">Информация о выбранном месте</h2>
              <p>Название: {selectedPlace.name}</p>
              <p>
                Координаты: {selectedPlace.lat}, {selectedPlace.lng}
              </p>
            </div>
            <Divider />
          </>
        )}
        <article className="block-container">
          <CustomInput
            text="Заметки"
            id="Notes"
            value={note}
            onChange={setNote}
            placeholder="Введите заметки..."
            type="textarea"
          />
        </article>
        <Divider />
        <section className="block-container">
          <h2 className="subtitle-style">Оценка бюджета</h2>
          <div className="grid grid-cols-3 gap-4">
            {arrInput.map((item, index) => (
              <article key={index}>
                <label
                  htmlFor={item.id}
                  className="block overflow-hidden rounded-md border bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {item.text}
                  </span>

                  <input
                    type="number"
                    id={item.id}
                    className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                    value={item.value}
                    onChange={item.onChange}
                  />
                </label>
              </article>
            ))}
          </div>
          <article className="mt-2">
            <h3>Общий бюджет: {calculateBudget()} рублей</h3>
          </article>
        </section>
        <div className="mt-4 md:w-[400px]">
          <CustomButton
            index={1}
            text={'Сохранить маршрут'}
            typeStyle={'primary'}
            colorText={'1'}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CreateRoute
