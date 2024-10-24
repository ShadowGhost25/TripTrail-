import CustomButton from './CustomButton'

const Banner = () => {
  return (
    <section
      className="relative bg-[url(/src/img/fon.png)] bg-cover bg-center bg-no-repeat"
      aria-labelledby="banner-heading"
    >
      <div className="relative mx-auto max-w-screen-xl px-4 py-36 sm:px-6 lg:flex lg:items-center lg:px-8">
        <article className="max-w-xl text-center ltr:sm:text-left ">
          <h1 className="text-left font-extrabold text-white py-14 sm:text-2xl md:text-3xl xl:text-3xl">
            Отправляйся туда, куда мечтаешь,
            <br />
            <strong className=" font-extrabold py-4 text-teal-600">
              c нашим планировщиком под рукой.
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <div className="w-full sm:w-auto">
              <CustomButton
                index={4}
                typeStyle={'primary'}
                colorText={'2'}
                text={'Создать маршрут'}
                link={'/createroute'}
              />
            </div>
            <div className="w-full sm:w-auto">
              <CustomButton
                index={5}
                typeStyle={'normal'}
                colorText={'3'}
                text={'Посмотреть маршруты'}
                link={'/viewroute'}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Banner
