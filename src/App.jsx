import { useState } from 'react'
import background from './assets/darth_vader_kneeling_wallpaper.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style ={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>


        {/* <h1>Star Wars Fan Page</h1>
        <p>Welcome to the ultimate Star Wars fan page!</p> */}
      </div>

    </>
  )
}

export default App
