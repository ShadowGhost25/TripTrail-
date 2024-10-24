import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Divider from '../components/Divider'

const PrivacyPolicyPage = () => {
  const arrPrivacy = [
    {
      title: '1. Общие положения',
      text: 'Настоящая Политика конфиденциальности регулирует порядок обработки и защиты персональных данных пользователей на сайте TripTrail. Мы стремимся обеспечить защиту личной информации пользователей и соблюдаем все законы и нормативные акты, касающиеся конфиденциальности.',
    },
    {
      title: '2. Сбор и использование персональных данных',
      text: 'Мы можем собирать и обрабатывать следующие типы персональных данных:',
    },
    {
      title: '3. Передача и хранение данных',
      text: 'Мы не передаем ваши личные данные третьим лицам, за исключением случаев, когда это необходимо для выполнения юридических обязательств или предоставления услуг.',
    },
    {
      title: '4. Права пользователей',
      text: 'Вы имеете право получить доступ к вашим персональным данным, запросить их исправление или удаление. Свяжитесь с нами по электронной почте: ',
      address: 'test@triptrail.com',
    },
    {
      title: '5. Контактная информация',
      text: 'Если у вас есть вопросы по поводу этой Политики конфиденциальности или обработки ваших данных, свяжитесь с нами по электронной почте: ',
      address: 'test@triptrail.com',
    },
  ]
  return (
    <div className="div-container">
      <Header />
      <main className="main-container">
        <h1 className="title-style">Политика конфиденциальности</h1>
        {arrPrivacy.map((item, index) => (
          <>
            <article key={index} className="block-container">
              <h2 className="subtitle-style">{item.title}</h2>
              {'address' in item ? (
                <>
                  <p>
                    {item.text}
                    <address className="inline">
                      <Link
                        className="email-style"
                        to={'mailto:test@triptrail.com'}
                      >
                        {item.address}
                      </Link>
                    </address>
                  </p>
                </>
              ) : (
                <p>{item.text}</p>
              )}
            </article>
            <Divider />
          </>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
