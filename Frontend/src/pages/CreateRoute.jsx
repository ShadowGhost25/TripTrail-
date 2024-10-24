import { useEffect, useState } from 'react'
import {
  Clusterer,
  FullscreenControl,
  ListBox,
  ListBoxItem,
  Map,
  Placemark,
  TrafficControl,
  TypeSelector,
  ZoomControl,
} from '@pbe/react-yandex-maps'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import Divider from '../components/Divider'
import NoAuth from '../components/NoAuth'
import { selectIsAuth } from '../redux/slice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateRoute } from '../redux/slice/routeSlice'
import { Bounce, toast } from 'react-toastify'
import LoadingSpinner from '../components/Loading'

const CreateRoute = () => {
  const isAuth = useSelector(selectIsAuth)
  const { status } = useSelector((state) => state.auth)
  const isLoadingHome = status === 'loaded'
  console.log(isLoadingHome)
  const dispatch = useDispatch()
  const [places, setPlaces] = useState([])
  const [budget, setBudget] = useState([])
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [ymapsLoaded, setYmapsLoaded] = useState(false)
  const [mapCenter, setMapCenter] = useState([55.751244, 37.618423]) // Начальные координаты карты

  // Проверка загрузки Yandex Maps API
  useEffect(() => {
    const checkYmaps = () => {
      if (window.ymaps) {
        setYmapsLoaded(true)
      } else {
        setTimeout(checkYmaps, 100)
      }
    }

    checkYmaps()
  }, [])

  const addPlace = (coords, name) => {
    const newPlace = {
      name: name,
      lat: coords[0],
      lng: coords[1],
    }
    setPlaces([...places, newPlace])
  }

  const handleMapClick = (e) => {
    if (!ymapsLoaded) return
    const coords = e.get('coords')

    const geocoder = window.ymaps.geocode(coords)
    geocoder.then((res) => {
      const firstGeoObject = res.geoObjects.get(0)
      const name = firstGeoObject
        ? firstGeoObject.getAddressLine()
        : 'Неизвестное место'
      addPlace(coords, name)
    })
  }

  //////////////////////////!
  const cities = [
    { name: 'Москва', lat: 55.7558, lng: 37.6173 },
    { name: 'Пенза', lat: 53.1944, lng: 45.0185 },
    { name: 'Санкт-Петербург', lat: 59.9343, lng: 30.3351 },
    { name: 'Новосибирск', lat: 55.0084, lng: 82.0155 },
    { name: 'Екатеринбург', lat: 56.8389, lng: 60.6057 },
    { name: 'Нижний Новгород', lat: 56.3287, lng: 44.002 },
    { name: 'Казань', lat: 55.8304, lng: 49.0661 },
    { name: 'Челябинск', lat: 55.1644, lng: 61.4368 },
    { name: 'Омск', lat: 54.9885, lng: 73.3242 },
    { name: 'Самара', lat: 53.1959, lng: 50.1003 },
    { name: 'Ростов-на-Дону', lat: 47.2232, lng: 39.718 },
    { name: 'Красноярск', lat: 56.0153, lng: 92.8932 },
    { name: 'Волгоград', lat: 48.708, lng: 44.513 },
    { name: 'Уфа', lat: 54.7388, lng: 55.9721 },
    { name: 'Хабаровск', lat: 48.482, lng: 135.0655 },
    { name: 'Тюмень', lat: 57.1523, lng: 65.5272 },
  ]
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
  //////////////////////////!
  const handleSaveMap = async () => {
    const arrBudget = [budget]
    const params = { title, places, notes, arrBudget }
    const data = await dispatch(fetchCreateRoute(params))
    if (data.payload !== undefined) {
      localStorage.setItem('routeUpdateSuccess', 'true')
      window.location.reload()
    }
  }
  const calculateBudget = () => {
    const total =
      (budget.transport || 0) + (budget.accommodation || 0) + (budget.food || 0)
    return total
  }
  //////////////////////////!
  const handlePlacemarkClick = (place) => {
    setMapCenter([place.lat, place.lng])
    setSelectedPlace(place)
  }

  const handleListBoxItemClick = (place) => {
    setMapCenter([place.lat, place.lng]) // Устанавливаем центр карты на координаты выбранного места
    setSelectedPlace(place) // Устанавливаем выбранное место
  }
  const handleRemovePlace = () => {
    if (!selectedPlace) return

    // Удаляем выбранное место из массива places
    setPlaces(places.filter((place) => place !== selectedPlace))
    setSelectedPlace(null) // Сбрасываем выбранное место
  }
  //////////////////////////!
  useEffect(() => {
    const isProfileUpdated = localStorage.getItem('routeUpdateSuccess')
    if (isProfileUpdated) {
      toast.success('Вы создали маршрут', {
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

      localStorage.removeItem('routeUpdateSuccess')
    }
  }, [])
  return (
    <>
      {!isLoadingHome && window.localStorage.getItem('token') ? (
        <LoadingSpinner />
      ) : (
        <div className="div-container">
          <Header />
          <main className="main-container">
            <h1 className="title-style">Создать маршрут</h1>
            {isAuth && status === 'loaded' ? (
              <>
                <article className="block-container">
                  <CustomInput
                    htmlFor="nameRoute"
                    text="Название маршрута"
                    type="text"
                    id="nameRoute"
                    placeholder="Введите название маршрута"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </article>
                <Divider />
                <article className="block-container">
                  <label className="block text-lg font-bold mb-4">
                    Добавить места
                  </label>
                  <Map
                    state={{ center: mapCenter, zoom: 10 }}
                    width="100%"
                    height="400px"
                    onClick={handleMapClick}
                  >
                    <Clusterer
                      options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false,
                      }}
                    >
                      {places.map((place, index) => (
                        <Placemark
                          key={index}
                          geometry={[place.lat, place.lng]}
                          properties={{
                            balloonContent: place.name,
                          }}
                          options={{
                            preset:
                              selectedPlace === place
                                ? 'islands#redIcon'
                                : 'islands#blueIcon',
                          }}
                          onClick={() => handlePlacemarkClick(place)}
                        />
                      ))}
                    </Clusterer>
                    <TrafficControl options={{ float: 'right' }} />
                    <FullscreenControl />
                    <ZoomControl />
                    <TypeSelector options={{ float: 'right' }} />

                    <ListBox data={{ content: 'Города' }}>
                      {cities.map((city, index) => (
                        <ListBoxItem
                          key={index}
                          data={{ content: city.name }}
                          onClick={() => handleListBoxItemClick(city)}
                        />
                      ))}
                    </ListBox>
                  </Map>
                </article>
                <Divider />
                <article className="block-container">
                  <h2 className="subtitle-style">Список мест</h2>
                  <ul>
                    {places.map((place, index) => (
                      <li
                        key={index}
                        className={
                          selectedPlace === place
                            ? 'text-teal-800 dark:text-teal-400 mb-2 cursor-pointer'
                            : 'mb-2 cursor-pointer'
                        }
                        onClick={() => handlePlacemarkClick(place)}
                      >
                        {place.name}
                      </li>
                    ))}
                  </ul>
                </article>
                <Divider />
                {selectedPlace && (
                  <>
                    <div className="block-container">
                      <h2 className="subtitle-style">
                        Информация о выбранном месте
                      </h2>
                      <p>Название: {selectedPlace.name}</p>
                      <p>
                        Координаты: {selectedPlace.lat}, {selectedPlace.lng}
                      </p>
                      <div className="mt-2 w-[150px]">
                        <CustomButton
                          click={handleRemovePlace}
                          typeStyle={'cancellation'}
                          colorText={'4'}
                          text={'Удалить'}
                        />
                      </div>
                    </div>
                    <Divider />
                  </>
                )}
                <article className="block-container">
                  <CustomInput
                    text="Заметки"
                    id="Notes"
                    onChange={(e) => setNotes(e.target.value)}
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
                        <CustomInput
                          key={index}
                          htmlFor={item.id}
                          text={item.text}
                          type={'number'}
                          id={item.id}
                          newValue={item.value}
                          onChange={item.onChange}
                        />
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
                    click={handleSaveMap}
                  />
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

export default CreateRoute
