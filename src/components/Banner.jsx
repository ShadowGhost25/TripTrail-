import CustomButton from './CustomButton'

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
            <CustomButton
              index={4}
              typeStyle={'banner'}
              text={'Создать маршрут'}
            />
            <div className="w-full sm:w-auto">
              <CustomButton
                index={5}
                typeStyle={'normal'}
                text={'Посмотреть маршруты'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
