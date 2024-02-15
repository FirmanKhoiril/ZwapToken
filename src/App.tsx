import { Footer, Navbar, Services, Transaction, Welcome } from './components'

export const App = () => {
  return (
  <main className=' container mx-auto px-4'>
    <Navbar />
    <Welcome />
    <Services />
    <Transaction />
    <Footer />
  </main>
  )
}
