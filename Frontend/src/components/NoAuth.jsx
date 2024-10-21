import CustomButton from './CustomButton'

const NoAuth = () => {
  return (
    <div className="block-container">
      <h2 className="test subtitle-style">
        Вы не авторизованы. Хотите авторизоваться ?
      </h2>
      <div className="pb-6">
        <CustomButton
          text={'Авторизация'}
          typeStyle={'primary'}
          colorText={'1'}
          link={'/auth'}
        />
      </div>
      <div className="">
        <CustomButton
          text={'Регистрация'}
          typeStyle={'primary'}
          colorText={'1'}
          link={'/register'}
        />
      </div>
    </div>
  )
}

export default NoAuth
