import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link className="block min-w-[152px] min-h-[40px]" to="/">
      <figure>
        <img src="/src/img/logo.png" alt="logo" />
        <figcaption className="sr-only">Логотип сайта</figcaption>
      </figure>
    </Link>
  )
}

export default Logo
