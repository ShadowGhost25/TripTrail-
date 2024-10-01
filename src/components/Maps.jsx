import { useEffect } from 'react'

const Maps = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.ymaps.Map('map', {
        center: [55.75, 37.57], // Координаты центра карты
        zoom: 10, // Уровень масштабирования
      })

      // Добавление метки
      const placemark = new window.ymaps.Placemark([55.75, 37.57], {
        balloonContent: 'Это место на карте!',
      })

      map.geoObjects.add(placemark)
    }

    if (window.ymaps) {
      window.ymaps.ready(initMap)
    }
  }, [])

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}

export default Maps
