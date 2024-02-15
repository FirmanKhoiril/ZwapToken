import { CiBitcoin } from "react-icons/ci";

const Navbar = () => {

    const connectWallet = () => {}
    
  return (
    <nav className='w-full flex items-center py-4 justify-between'>
        <div className="flex text-2xl font-openSans relative items-center font-extrabold tracking-wide  bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-violet-400 to-indigo-500 px-2 rounded-md py-2">
            <span>Zend</span>
           <p>Token</p> 
           <span className="absolute -top-2 left-6 rotate-[340deg]"><CiBitcoin color="#fbbf24" size={27} /></span>
        </div>
        <button type="button" onClick={connectWallet} className="px-6 py-2 bg-blue-500/80 hover:bg-blue-500/60 text-white rounded-full drop-shadow-md">
            Connect Wallet
        </button>
    </nav>
  )
}

export default Navbar