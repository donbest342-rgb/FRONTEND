import Nav from '../Component/Nav.jsx'
import {Link} from 'react-router-dom'
import Hero from '../Component/Hero.jsx'
import Heros from '../Component/Heros.jsx'
// import Image from '../Tools/Image.jsx'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Heros/>
    </div>
  )
}

export default Home
