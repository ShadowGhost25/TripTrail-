const Divider = () => {
  const arr = [
    'Путешествуй с нами',
    'Откройте новые горизонты',
    'Ваша история начинается здесь',
    'Маршрут вашей мечты',
    'Планируйте с легкостью',
    'Создавайте воспоминания',
    'Найдите своё приключение',
    'Исследуйте мир с нами',
  ]
  const randomItem = arr[Math.floor(Math.random() * arr.length)]
  return (
    <span className="flex items-center my-4">
      <span className="h-px flex-1 bg-black dark:bg-white"></span>
      <span className="shrink-0 px-6">{randomItem}</span>
      <span className="h-px flex-1 bg-black dark:bg-white"></span>
    </span>
  )
}

export default Divider
