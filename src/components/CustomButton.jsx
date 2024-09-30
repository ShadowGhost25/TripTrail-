import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({
  click,
  text,
  index,
  typeStyle,
  link,
  svg,
  colorText,
}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    // Если передан click, выполнит его
    if (click) {
      click()
    }
    // Если есть ссылка, переходите по ней
    if (link) {
      navigate(link)
    }
    setIsRotated(!isRotated)
  }
  const [isRotated, setIsRotated] = useState(false)

  const buttonStyles = (type) => {
    switch (type) {
      case 'primary':
        return 'inline-block w-full rounded-md border border-teal-600 bg-teal-600 px-4 py-2.5 text-sm font-medium transition hover:bg-transparent focus:outline-none focus:ring-2 active:text-teal-500  dark:hover:text-white dark:hover:bg-transparent sm:px-8 sm:py-2.5'
      case 'normal':
        return 'inline-block w-full rounded-md bg-gray-200 px-8 py-3 text-sm  font-medium text-teal-700 transition border border-gray-100 hover:text-teal-600/75 hover:bg-transparent hover:border-teal-600 sm:block dark:border dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:bg-transparent dark:hover:border dark:hover:border-teal-600 sm:px-8 sm:py-2.5'
      case 'burgermenu':
        return 'flex items-center  rounded bg-teal-600 text-white dark:bg-transparent dark:border dark:border-gray-600 dark:hover:border-teal-600'
      case 'navbar':
        return 'inline-block w-[145px] h-[42px] text-sm rounded-md leading-[1rem] border text-gray-700 px-3 font-medium transition hover:border-teal-600  hover:bg-gray-200 hover:text-gray-800 hover:bg-transparent focus:outline-none focus:ring-2 active:text-teal-500  dark:text-white dark:hover:text-white dark:hover:bg-transparent'
      default:
        return ''
    }
  }
  const buttonColorText = (type) => {
    switch (type) {
      case '1':
        return ' text-white hover:text-teal-600 active:text-teal-500'
      case '2':
        return ' text-white hover:text-white active:text-white'
      case '3':
        return ' text-teal-600 hover:text-white active:text-white'
      default:
        return ''
    }
  }

  return (
    <button
      onClick={handleClick}
      key={index}
      className={buttonStyles(typeStyle) + buttonColorText(colorText)}
    >
      {svg === true && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-9 h-9 py-1 size-5 transform transition-transform duration-300  ${
            isRotated ? 'rotate-90' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
      {text}
    </button>
  )
}

CustomButton.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string,
  index: PropTypes.number,
  typeStyle: PropTypes.string,
  colorText: PropTypes.string,
  link: PropTypes.string,
  svg: PropTypes.bool,
}

export default CustomButton
