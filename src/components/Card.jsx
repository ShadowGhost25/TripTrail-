import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <section className="my-4">
      <h2 className="sm:px-6 subtitle-style">Наша команда</h2>
      <div className="mt-4 flex justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-lg border border-gray-200 bg-gray-200 p-6 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <figure>
              <img
                alt="Team member"
                src="/src/img/photo.png"
                className="h-16 w-16 rounded-full object-cover"
              />
              <figcaption className="sr-only">Фото Ильи Вавилина</figcaption>
            </figure>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Илья Вавилин
              </h3>
              <nav className="mt-2">
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      to="https://vk.com/natsudragnei"
                      className="text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                      VK
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://github.com/ShadowGhost25"
                      className="text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                      GitHub
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="#"
                className="block rounded-lg border border-gray-300 p-4 dark:border-gray-700 hover:border-teal-600 dark:hover:border-teal-400"
              >
                <strong className="text-gray-900 dark:text-gray-100">
                  TripTrail
                </strong>
                <p className="mt-1 text-sm dark:text-gray-400">
                  Илья — главный по проекту и ведущий разработчик приложения для
                  планирования путешествий. Он отвечает за архитектуру
                  приложения, его техническую реализацию и управление командой.
                  Илья обладает глубокими знаниями в области фронтенд-разработки
                  и активно применяет современные технологии для создания
                  интуитивно понятного интерфейса и удобного пользовательского
                  опыта.
                </p>
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Card
