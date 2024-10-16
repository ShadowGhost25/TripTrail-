import Footer from '../components/Footer'
import Header from '../components/Header'

const FaqcPage = () => {
  const faqArr = [
    {
      title: 'Как создать аккаунт на вашем сайте?',
      text: 'Чтобы создать аккаунт, нажмите на кнопку «Регистрация» в верхнем правом углу страницы. Затем заполните необходимые поля, укажите ваш email и придумайте пароль. После этого вы сможете войти в систему.',
    },
    {
      title: 'Как восстановить забытый пароль?',
      text: 'Если вы забыли пароль, нажмите на ссылку «Забыли пароль?» на странице авторизации. Введите адрес электронной почты, связанный с вашим аккаунтом, и следуйте инструкциям, чтобы сбросить пароль.',
    },
    {
      title: 'Как редактировать или удалить маршрут?',
      text: 'Перейдите в раздел «Мои маршруты», выберите маршрут, который вы хотите изменить или удалить, и нажмите на кнопку «Редактировать» или «Удалить» рядом с ним.',
    },
    {
      title: 'Можно ли оценить бюджет поездки на вашем сайте?',
      text: 'Да, в нашем приложении есть функция оценки бюджета. Вы можете добавить предполагаемые расходы на транспорт, проживание и питание, и система автоматически подсчитает общие затраты.',
    },
    {
      title: 'Как связаться с поддержкой?',
      text: 'Если у вас возникли вопросы или проблемы, вы можете связаться с нашей службой поддержки, отправив сообщение через форму обратной связи на странице «Контакты».',
    },
    {
      title: 'Могу ли я изменить свои персональные данные?',
      text: 'Да, вы можете изменить ваши данные в разделе «Профиль». Внесите необходимые изменения и сохраните их.',
    },
    {
      title: 'Есть ли мобильное приложение?',
      text: 'На данный момент мы разрабатываем мобильное приложение. Ожидайте его выхода в ближайшее время!',
    },
  ]
  return (
    <div className="div-container">
      <Header />
      <main className="main-container">
        <h1 className="title-style">FAQ</h1>
        {faqArr.map((item, index) => (
          <details
            key={index}
            className="group border-s-4 border-teal-500 bg-gray-200 px-6 py-6 mb-4 dark:bg-gray-800 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="subtitle-style">{item.title}</h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
              {item.text}
            </p>
          </details>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default FaqcPage
