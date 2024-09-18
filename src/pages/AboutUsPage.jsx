import Card from '../components/Card'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl items-center gap-8 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-2 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl">О нас</h1>
        <p className="my-8 text-base leading-7">
          Мы - команда профессионалов, посвятивших себя созданию уникального
          приложения для планирования путешествий. Наша цель - сделать ваши
          путешествия проще и удобнее, предлагая вам лучшие инструменты для
          планирования маршрутов, создания заметок и управления бюджетом.
        </p>
        <Divider />
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Наши ценности</h2>
          <ul className="mt-4 space-y-4 list-disc list-inside">
            <li>
              <strong>Инновации:</strong> Мы стремимся к постоянному улучшению и
              внедрению новых технологий.
            </li>
            <li>
              <strong>Качество:</strong> Мы предоставляем только качественные
              решения и надежный сервис.
            </li>
            <li>
              <strong>Пользовательский опыт:</strong> Наша команда фокусируется
              на создании удобного и интуитивно понятного интерфейса.
            </li>
          </ul>
        </div>
        <Divider />
        <Card />
        <Divider />
        <div className="my-8">
          <h2 className="text-2xl font-semibold">Свяжитесь с нами</h2>
          <p className="mt-4">
            Мы всегда рады вашим отзывам и предложениям. Свяжитесь с нами по
            следующему адресу:
          </p>
          <p className="mt-2 text-teal-600 dark:text-teal-400">
            test@triptrail.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
