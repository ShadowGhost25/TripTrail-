import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Maps from '../components/Maps'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
const ContactPage = () => {
  const arrInputs = [
    {
      htmlFor: 'Name',
      id: 'Name',
      type: 'text',
      placeholder: 'Ваше Имя',
      text: 'Имя',
    },
    {
      htmlFor: 'Email',
      id: 'Email',
      type: 'email',
      placeholder: 'Ваш Email',
      text: 'Email',
    },
    {
      htmlFor: 'Notes',
      id: 'Notes',
      text: 'Сообщение',
      placeholder: 'Введите сообщение...',
      type: 'textarea',
    },
  ]
  return (
    <>
      <Header />
      <main className="main-container">
        <section aria-labelledby="contact-info" className="mb-8">
          <h1 className="title-style">Контакты</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            <div className="block-container">
              <h2 id="contact-info" className="subtitle-style">
                Как с нами связаться
              </h2>
              <p className="mb-4">
                Если у вас есть вопросы или предложения, вы можете связаться с
                нами по следующим каналам:
              </p>
              <h2 className="subtitle-style">Наш офис</h2>
              <address className="not-italic">
                <p>Адрес: 412421 Россия, Пенза</p>
                <p>
                  Телефон: &nbsp;
                  <Link
                    to="tel:+7(996)801-18-87"
                    className="text-teal-600 dark:text-teal-400"
                  >
                    +7 (999) 321-21-22
                  </Link>
                </p>
                <p>
                  Email: &nbsp;
                  <Link to="mailto:test@triptrail.com" className="email-style">
                    test@triptrail.com
                  </Link>
                </p>
              </address>
            </div>
            <section className="block-container" aria-labelledby="contact-form">
              <h2 id="contact-form" className="subtitle-style">
                Отправить сообщение
              </h2>
              <form className="space-y-4">
                {arrInputs.map((item, index) => (
                  <CustomInput
                    key={index}
                    htmlFor={item.htmlFor}
                    id={item.id}
                    text={item.text}
                    type={item.type}
                    placeholder={item.placeholder}
                  />
                ))}
                <CustomButton
                  typeStyle={'primary'}
                  text={'Отправить'}
                  colorText={'1'}
                />
              </form>
            </section>
          </div>
        </section>
        <section aria-labelledby="map" className="block-container">
          <h2 id="map" className="subtitle-style">
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
