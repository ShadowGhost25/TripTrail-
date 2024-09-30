const DarkMod = () => {
  const color = 'white'
  //   const [active, setActive] = useState(false)
  const handleToggle = (type) => {
    if (type === 'dark') {
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }
  return (
    <div className="mt-2">
      <span
        onClick={() => handleToggle('light')}
        className="inline-flex rounded-full transition border bg-teal-700 border-teal-700 px-2.5 py-1 text-teal-700 dark:text-teal-100 dark:bg-transparent"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2053_6)">
            <path
              d="M8.5 12.0416C10.456 12.0416 12.0417 10.4559 12.0417 8.49992C12.0417 6.54391 10.456 4.95825 8.5 4.95825C6.54399 4.95825 4.95833 6.54391 4.95833 8.49992C4.95833 10.4559 6.54399 12.0416 8.5 12.0416Z"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 0.708252V2.12492"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 14.875V16.2917"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.98917 2.98926L3.995 3.99509"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.005 13.0049L14.0108 14.0107"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.708328 8.5H2.12499"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.875 8.5H16.2917"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.98917 14.0107L3.995 13.0049"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.005 3.99509L14.0108 2.98926"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2053_6">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span
        onClick={() => handleToggle('dark')}
        className="inline-flex rounded-full transition border border-teal-700 px-2.5 py-1 text-teal-700 dark:bg-teal-700 dark:text-teal-100"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-teal-700 dark:stroke-white"
        >
          <path
            d="M19.1554 11.7758C18.9981 13.478 18.3593 15.1002 17.3137 16.4526C16.2681 17.805 14.8589 18.8316 13.2511 19.4124C11.6433 19.9931 9.9034 20.104 8.23492 19.7319C6.56644 19.3599 5.03841 18.5204 3.82964 17.3116C2.62088 16.1028 1.78136 14.5748 1.40933 12.9063C1.03729 11.2379 1.14813 9.49792 1.72888 7.89014C2.30962 6.28235 3.33625 4.87321 4.68863 3.82759C6.04101 2.78198 7.66322 2.14315 9.36542 1.98584C8.36883 3.33411 7.88927 4.99529 8.01395 6.66725C8.13863 8.33922 8.85928 9.9109 10.0448 11.0964C11.2304 12.282 12.802 13.0026 14.474 13.1273C16.146 13.252 17.8072 12.7724 19.1554 11.7758Z"
            stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  )
}

export default DarkMod
