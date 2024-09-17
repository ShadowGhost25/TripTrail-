import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="relative bg-[url(/src/img/fon.png)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left ">
          <h1 className="text-left font-extrabold text-white sm:text-5xl">
            Отправляйся туда, куда мечтаешь,
            <strong className=" font-extrabold text-teal-600">
              c нашим планировщиком под рукой.
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="#"
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 active:bg-teal-400 sm:w-auto"
            >
              Создать маршрут
            </Link>

            <Link
              to="#"
              className="block rounded-md bg-gray-100  px-12 py-3 text-sm font-medium text-teal-600  hover:text-teal-600/75 sm:w-auto"
            >
              Просмотреть маршруты
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
