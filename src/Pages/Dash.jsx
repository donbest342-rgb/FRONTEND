import UsersNave from "../Component/UsersNav.jsx"
import Dropdown from '../Tools/Dropdown.jsx'
import Heros from '../Component/Hero.jsx'

const Dash = () => {
  return (
   
    <div>
    <UsersNave/>
    <Heros/>
      <h1>Dashboard Page</h1>
      <Dropdown/>
    </div>
  )
}

export default Dash
