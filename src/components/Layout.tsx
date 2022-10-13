import { Outlet } from 'react-router-dom'
import HomePage from '../pages/HomePage';

const Layout = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <HomePage />
      <Outlet />
    </div>
  )
}

export default Layout
