import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { route } from './route'
import { useEffect } from 'react'
import { YMaps } from '@pbe/react-yandex-maps'

let App = () => {
  const { pathname } = useLocation()
  const apikey = '9ba58d76-335d-4e40-8673-0e367db75b78'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <YMaps
        query={{
          apikey: apikey,
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
