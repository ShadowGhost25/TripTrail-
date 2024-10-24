import { Link } from 'react-router-dom'

const NavFooter = () => {
  const arr = [
    {
      title: 'Информация',
      link: [
        { text: 'Профиль', to: '/profile' },
        { text: 'Создать маршрут', to: '/createroute' },
        { text: 'Просмотреть маршруты', to: '/viewroute' },
      ],
    },
    {
      title: 'Помощь',
      link: [
        { text: 'Контакты', to: '/contacts' },
        { text: 'FAQ', to: '/faq' },
        { text: 'О нас', to: '/aboutus' },
      ],
    },
    {
      title: 'Cвязь с нами',
      link: [
        {
          text: 'test@triptrail.com',
          to: 'mailto:test@triptrail.com',

          d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        },
        {
          text: '+7 (999) 321-21-22',
          to: 'tel:+7 (999) 321-21-22',

          d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
        },
        {
          text: '412421 Россия, Пенза',
          d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
        },
      ],
    },
  ]
  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
      {arr.map((item, index) => (
        <nav key={index}>
          <p className="text-lg font-medium text-gray-900  dark:text-gray-200">
            {item.title}
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            {item.link.map((subItem, index) => (
              <li key={index} className="hover:opacity-75 transition">
                <Link
                  className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  to={subItem.to}
                >
                  {subItem.d && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900 dark:text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={subItem.d}
                      />
                    </svg>
                  )}

                  <span className="flex-1 text-gray-700 hover:opacity-75 dark:text-gray-400">
                    {subItem.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </section>
  )
}

export default NavFooter
