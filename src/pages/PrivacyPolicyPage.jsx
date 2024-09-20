import Footer from '../components/Footer'
import Header from '../components/Header'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl items-center gap-8  py-10 px-4  dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:px-6 lg:px">
        <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
          <p>
            Настоящая Политика конфиденциальности регулирует порядок обработки и
            защиты персональных данных пользователей на сайте TripTrail. Мы
            стремимся обеспечить защиту личной информации пользователей и
            соблюдаем все законы и нормативные акты, касающиеся
            конфиденциальности.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Сбор и использование персональных данных
          </h2>
          <p>
            Мы можем собирать и обрабатывать следующие типы персональных данных:
          </p>
          <ul className="list-disc list-inside">
            <li>Имя, электронная почта, контактные данные</li>
            <li>
              Информация о посещениях и использовании сайта (включая IP-адрес,
              тип устройства, браузер)
            </li>
            <li>
              Данные, предоставленные вами при использовании наших сервисов
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Передача и хранение данных
          </h2>
          <p>
            Мы не передаем ваши личные данные третьим лицам, за исключением
            случаев, когда это необходимо для выполнения юридических
            обязательств или предоставления услуг.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. Права пользователей
          </h2>
          <p>
            Вы имеете право получить доступ к вашим персональным данным,
            запросить их исправление или удаление. Свяжитесь с нами по
            электронной почте: test@triptrail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Контактная информация
          </h2>
          <p>
            Если у вас есть вопросы по поводу этой Политики конфиденциальности
            или обработки ваших данных, свяжитесь с нами по электронной почте:
            test@triptrail.com
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicyPage
