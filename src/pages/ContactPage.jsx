import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Maps from '../components/Maps'
const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <section aria-labelledby="contact-info" className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            <div className="block-container">
              <h1 className="text-3xl font-bold mb-6">Контакты</h1>
              <h2 id="contact-info" className="text-xl font-semibold mb-4">
                Как с нами связаться
              </h2>
              <p className="mb-4">
                Если у вас есть вопросы или предложения, вы можете связаться с
                нами по следующим каналам:
              </p>
              <address className="not-italic">
                <h3 className="text-lg font-semibold mb-2">Наш офис</h3>
                <p className="mb-2">Адрес: 412421 Россия, Пенза </p>
                <p className="mb-2">
                  Телефон: &nbsp;
                  <Link to="tel:+7(996)801-18-87" className="text-teal-600">
                    +7 (999) 321-21-22
                  </Link>
                </p>
                <p>
                  Email: &nbsp;
                  <Link
                    to="mailto:test@triptrail.com?subject=Hello&body=Message%20content"
                    className="text-teal-600"
                  >
                    test@triptrail.com
                  </Link>
                </p>
              </address>
            </div>
            <section className="block-container" aria-labelledby="contact-form">
              <h2 id="contact-form" className="text-xl font-semibold mb-6">
                Отправить сообщение
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 overflow-hidden rounded-md border  bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                  >
                    Имя
                    <input
                      className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                      type="text"
                      id="name"
                      placeholder="Ваше имя"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 overflow-hidden rounded-md border  bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                  >
                    Email
                    <input
                      className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                      type="email"
                      id="email"
                      placeholder="Ваш email"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    className="block overflow-hidden rounded-md border  bg-white border-gray-200 px-3 py-2 shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600 dark:border-gray-700 dark:bg-gray-800"
                    htmlFor="message"
                  >
                    Сообщение
                    <textarea
                      className="mt-1 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                      id="message"
                      rows="4"
                      placeholder="Ваше сообщение"
                      required
                    ></textarea>
                  </label>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-500 transition"
                >
                  Отправить
                </button>
              </form>
            </section>
          </div>
        </section>
        <section aria-labelledby="map" className="mt-8">
          <h2 id="map" className="text-xl font-semibold mb-4">
            Как нас найти
          </h2>
          <Maps />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
