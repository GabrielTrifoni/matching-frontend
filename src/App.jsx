import Header from './components/Header'
import { UserProvider } from './components/UserContext'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <UserProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserProvider>
    </div>
  )
}

export default App
