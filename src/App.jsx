import './App.css'
import Header from '../src/components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Properties from './components/Properties'
import Clients from './components/Clients'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {


  return (
    <>
    {/* <Header/> */}
    <Navbar/>
      <Home/>
      <Properties/>
      <Clients/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
