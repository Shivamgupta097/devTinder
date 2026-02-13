
import { Outlet } from 'react-router-dom'
import Footers from './Footers'
import NavBar from './NavBar'

const Body = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footers />
    </>
  )
}

export default Body