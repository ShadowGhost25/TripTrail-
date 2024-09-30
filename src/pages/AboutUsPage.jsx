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
    <div className="div-container">
      <Header />
      <main className="main-container">
        <section className="block-container">
          <header>
            <h2 className="text-2xl font-semibold">О нас</h2>
          </header>
          <p className="my-4 text-base leading-7">
            Мы - команда профессионалов, посвятивших себя созданию уникального
            приложения для планирования путешествий. Наша цель - сделать ваши
            путешествия проще и удобнее, предлагая вам лучшие инструменты для
            планирования маршрутов, создания заметок и управления бюджетом.
          </p>
        </section>
        <Divider />
        <section className="block-container">
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
        <Card />
        <Divider />
        <section className="block-container">
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
    </div>
  )
}

export default AboutUs
