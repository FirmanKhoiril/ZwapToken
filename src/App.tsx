import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, SendToken } from './pages'

export const App = () => {
  return (
  <main className=' container mx-auto px-4'>
    <Navbar />
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/send-token" element={<SendToken />} />
    </Routes>
    <Footer />
  </main>
  )
}
