import Category from "./components/Category"
import Delivery from "./components/Delivery"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Meals from "./components/Meals"
import NewsLetter from "./components/NewsLetter"
import TopNav from "./components/TopNav"
import TopPicks from "./components/TopPicks"


function App() {


  return (
    <>
        <TopNav/>
        <Featured />
        <Delivery />
        <TopPicks />
        <Meals/>
        <Category/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default App
