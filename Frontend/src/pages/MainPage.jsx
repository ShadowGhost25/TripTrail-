import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
const MainPage = () => {
  return (
    <div className="div-container">
      <Header />
      <div className="main-container">
        <Banner />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
