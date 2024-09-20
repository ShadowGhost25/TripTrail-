import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="block min-w-[152px] min-h-[40px]"
        src="/src/img/logo.png"
        alt="logo"
      />
    </Link>
  )
}

export default Logo
