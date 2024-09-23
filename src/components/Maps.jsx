import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const Maps = () => {
  return (
    <YMaps
      query={{
        ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
      }}
    >
      <Map
        className="w-full h-[400px]"
        defaultState={{
          center: [55.75, 37.57],
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
      >
        <Placemark defaultGeometry={[55.75, 37.57]} />
      </Map>
    </YMaps>
  )
}

export default Maps
