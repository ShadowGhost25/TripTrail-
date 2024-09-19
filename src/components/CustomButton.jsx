import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CustomButton = ({ click, text, index, typeStyle, link, svg }) => {
  const buttonStyles = (type) => {
    switch (type) {
      case 'primary':
        return 'inline-block w-full rounded-md border border-teal-600 bg-teal-600 px-8 py-3 text-sm font-medium text-white transition hover:text-teal-600 hover:invert-0 hover:bg-transparent focus:outline-none focus:ring-2 active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white'
      case 'normal':
        return 'inline-block w-full rounded-md bg-gray-100 px-8 py-3 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
      case 'banner':
        return 'block w-full sm:w-auto rounded-md border border-teal-600 bg-teal-600 px-8 py-3 text-sm font-medium text-white transition hover:text-white hover:invert-0 hover:bg-transparent focus:outline-none focus:ring-2 active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white'
      case 'burgermenu':
        return 'block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden'
      default:
        return ''
    }
  }

  return (
    <button onClick={click} key={index} className={buttonStyles(typeStyle)}>
      <Link to={link}>{text}</Link>
      {svg === true ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        ''
      )}
    </button>
  )
}

CustomButton.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string,
  index: PropTypes.number,
  typeStyle: PropTypes.string,
  link: PropTypes.string,
  svg: PropTypes.bool,
}

export default CustomButton
