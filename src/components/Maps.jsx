import { Map, Placemark } from '@pbe/react-yandex-maps
const Maps = () => {
  // const [location, setLocation] = useState(null)
  // console.log(location)
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords
  //       setLocation([latitude, longitude]) // Сохраняем координаты в состоянии
  //     },
  //     (error) => {
  //       console.error('Ошибка получения местоположения: ', error)
  //     },
  //   )
  // }, [])

  const onLoad = () => {
    const teg = document.getElementsByClassName('ymaps-2-1-79-gototech')
    if (teg.length > 0) {
      teg[0].classList.remove('a.ymaps-2-1-79-gototech')
      teg[0].style.display = 'none'
    }
    // teg[0].style.color = 'red'
    // console.log((teg[0].style.display = 'none !important'))
    // console.log(teg[0])
    // Дополнительные действия после загрузки карты
  }

  return (
    <Map
      className="w-full h-[400px] yandexMap"
      onLoad={onLoad}
      defaultState={{
        center: [53.2007377, 45.0166208],
        zoom: 19,
        controls: ['zoomControl', 'fullscreenControl'],
      }}
      options={{ suppressMapOpenBlock: true }}
    >
      <Placemark defaultGeometry={[53.2007377, 45.0166208]} />
    </Map>
  )
}

export default Maps
