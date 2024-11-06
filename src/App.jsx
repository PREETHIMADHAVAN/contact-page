import { useState } from 'react'
import './App.css'
import ContactUs from './components/contact-us/ContactUs'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appContainer'>
      <Navigation />
      <ContactUs />
    </div>
  )
}

export default App
