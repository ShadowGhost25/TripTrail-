import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="relative bg-[url(/src/img/fon.png)] bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-screen-xl px-4 py-36 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left ">
          <h1 className="text-left font-extrabold text-white py-14 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Отправляйся туда, куда мечтаешь,
            <br />
            <strong className=" font-extrabold py-4 text-teal-600">
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
              className="block w-full rounded-md bg-gray-100  px-12 py-3 text-sm font-medium text-teal-600  hover:text-teal-600/75 sm:w-auto"
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
