
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './css/App.css'


export default function App() {
  return (
    <div className='app-container'>
      <Navbar />
      {/* <Hero /> */}
      <Card 
        image = 'image1.png'
        rating = {5.0}
        reviewsCount = {6}
        country = 'USA'
        title = 'Life lessons with Katie Zaferes'
        price = {136}
        status = 'sold out'
      />
    </div>
  )
}


