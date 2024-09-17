import { Navigate, Route, Routes } from 'react-router-dom'
import { route } from './route'

let App = () => {
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
