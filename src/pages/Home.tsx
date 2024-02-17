import { Services, Transaction, Welcome } from "../components";

const Home = () => {
  return (
    <section className="h-full  w-full">
    <Welcome />
    <Services />
    <Transaction />
    </section>
   

  )
}

export default Home