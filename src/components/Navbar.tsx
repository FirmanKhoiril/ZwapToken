
const Navbar = () => {

    const connectWallet = () => {}
    
  return (
    <nav className='w-full flex items-center py-4 justify-between'>
        <div className="flex text-2xl font-openSans items-center font-extrabold tracking-wide  bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-violet-400 to-indigo-500 px-2 rounded-md py-2">
            <span>Zwap</span>
           Token 
        </div>
        <button type="button" onClick={connectWallet} className="px-6 py-2 bg-blue-500/80 hover:bg-blue-500/60 text-white rounded-full drop-shadow-md">
            Connect Wallet
        </button>
    </nav>
  )
}

export default Navbar