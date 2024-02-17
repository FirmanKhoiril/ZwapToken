import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { Home, SendToken } from './pages'

export const App = () => {
  return (
  <main className='  h-full w-full px-4 relative'>
    <Navbar />
    <div className="w-full h-full  container mx-auto">
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/send-token" element={<SendToken />} />
    </Routes>
    </div>
   
    <Footer />
  </main>
  )
}
