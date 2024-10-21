import { Link } from 'react-router-dom'
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
        <h1 className="title-style">О нас</h1>
        <section className="block-container">
          <p className="my-4 text-base leading-7">
            <h2 className="text-xl font-semibold mb-4 border-b border-b-teal-600 inline">
              Мы
            </h2>
            &nbsp;- команда профессионалов, посвятивших себя созданию
            уникального приложения для планирования путешествий. Наша цель -
            сделать ваши путешествия проще и удобнее, предлагая вам лучшие
            инструменты для планирования маршрутов, создания заметок и
            управления бюджетом.
          </p>
        </section>
        <Divider />
        <section className="block-container">
          <h2 className="subtitle-style">Наши ценности</h2>
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
          <h2 className="subtitle-style">Свяжитесь с нами</h2>
          <p className="mt-4">
            Мы всегда рады вашим отзывам и предложениям. Свяжитесь с нами по
            следующему адресу:&nbsp;
            <address className="inline">
              <Link to={'mailto:test@triptrail.com'} className="email-style">
                test@triptrail.com
              </Link>
            </address>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
