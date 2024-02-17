import { useEffect, useState } from "react";
import { CiBitcoin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
    const navigate = useNavigate()

    const changeBackgroundNavbar = () => {
      if (window.scrollY >= 60) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false)
      }
    }

    useEffect(() => {
      window.addEventListener("scroll", changeBackgroundNavbar)
      return  () => {
        window.removeEventListener("scroll", changeBackgroundNavbar)
      }
    }, []);




    const connectWallet = () => {}
    
    const goHome = () => navigate("/")

  return (
    <nav className={`w-full ${showNavbar ? "bg-[#151349]" : " bg-transparent"} flex transition duration-300 items-center py-4 md:py-5 justify-between px-4  left-0 md:px-20 z-40 fixed top-0 `}>
        <div onClick={goHome} role="button" className="flex text-2xl font-openSans relative items-center font-extrabold tracking-wide  bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-violet-400 to-indigo-500 px-2 rounded-md py-2">
            <span>Zend</span>
            <p>Token</p> 
           <span className="absolute -top-2 left-6 rotate-[340deg]"><CiBitcoin color="#fbbf24" size={27} /></span>
        </div>
        <button type="button" onClick={connectWallet} className="tracking-tight px-4 font-openSans font-semibold lg:px-6 py-2 bg-blue-500/80 hover:bg-blue-500/60 text-white rounded-md drop-shadow-md">
            Connect Wallet
        </button>
    </nav>
  )
}

export default Navbar