import Card from '../components/Card'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AboutUs = () => {
  const arr = [
    {
      title: 'Инновации:',
      text: 'Мы стремимся к постоянному улучшению и внедрению новых технологий.',
    },
    {
      title: 'Качество:',
      text: 'Мы предоставляем только качественные решения и надежный сервис.',
    },
    {
      title: 'Пользовательский опыт:',
      text: 'Наша команда фокусируется на создании удобного и интуитивно понятного интерфейса',
    },
  ]
  return (
    <>
      <Header />
      <main className="mx-auto my-4 px-4 max-w-custom-xl items-center gap-8 dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:px-6 lg:px-8 xl:px-0">
        <section className="bg-gray-200 rounded-lg p-6 mb-4 dark:bg-gray-800 sm:p-6">
          <header>
            <h2 className="text-2xl font-semibold">О нас</h2>
          </header>
          <p className="my-8 text-base leading-7">
            Мы - команда профессионалов, посвятивших себя созданию уникального
            приложения для планирования путешествий. Наша цель - сделать ваши
            путешествия проще и удобнее, предлагая вам лучшие инструменты для
            планирования маршрутов, создания заметок и управления бюджетом.
          </p>
        </section>
        <Divider />
        <section className=" bg-gray-200 rounded-lg my-4 p-6 dark:bg-gray-800 sm:p-6">
          <header>
            <h2 className="text-2xl font-semibold">Наши ценности</h2>
          </header>
          <ul className="mt-4 space-y-4 list-disc list-inside">
            {arr.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </section>
        <Divider />
        <section>
          <Card />
        </section>
        <Divider />
        <section className="bg-gray-200 rounded-lg my-4 p-6 dark:bg-gray-800 sm:p-6">
          <header>
            <h2 className="text-2xl font-semibold">Свяжитесь с нами</h2>
          </header>
          <p className="mt-4">
            Мы всегда рады вашим отзывам и предложениям. Свяжитесь с нами по
            следующему адресу:
          </p>
          <address className="mt-2 text-teal-600 dark:text-teal-400">
            test@triptrail.com
          </address>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs
