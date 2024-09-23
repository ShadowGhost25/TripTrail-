import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { route } from './route'
import { useEffect } from 'react'

let App = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Routes>
        {route.map(({ path, element }) => (
          <Route key={path} path={path} element={element} exact />
        ))}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  )
}

export default App
