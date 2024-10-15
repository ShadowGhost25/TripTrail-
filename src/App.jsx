import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { route } from './route'
import { useEffect } from 'react'
import { YMaps } from '@pbe/react-yandex-maps'

let App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  const apikeys = 'bd312af2-ea78-41b9-9d21-9f0b7babe1e3'

  return (
    <>
      <YMaps
        query={{
          apikey: apikeys,
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
        }}
      >
        <Routes>
          {route.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
          ))}
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </YMaps>
    </>
  )
}

export default App
