import { BsInfoCircle } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='flex items-center md:flex-row flex-col gap-8 pt-20  md:pt-4 w-full relative justify-evenly md:justify-around min-h-[90dvh] h-full'>
        <div className="absolute -z-10 lg:block hidden blur-3xl opacity-30 -right-20 -top-40  h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-pink-500 via-indigo-400 to-blue-400 "></div>
        <div className="absolute -z-10 lg:block hidden blur-3xl opacity-30 right-64 top-0  h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-pink-500 via-indigo-400 to-blue-400 "></div>
    <div data-aos="fade-right" className=" flex flex-col gap-6">
       <div className="flex flex-col gap-4 md:gap-7">
            <h1 className='text-4xl md:text-[58px] leading-tight'>Send Crypto <br /> across the world</h1>
            <p className="opacity-60 md:text-base text-sm">Explore the crypto world. Buy and Sell <br /> cryptocurrency easily on ZendToken.</p>
       </div>
        <Link to={"/send-token"}>
        <button type="button" className="bg-blue-500/80 w-full hover:bg-blue-500/60 font-openSans font-semibold py-2 rounded-full">Send Token</button>
        </Link>
    </div>
    <div data-aos="fade-left" className="p-3 max-w-[350px] md:max-w-[400px] lg:max-w-[450px] w-full flex flex-col justify-between h-[200px] sm:h-[280px] relative drop-shadow-md bg-gradient-to-tr from-pink-500 via-violet-400 to-indigo-500 rounded-lg">
        <div className="p-2 border  max-w-[40px] transition duration-300 ease-out hover:text-black hover:bg-white hover:border-transparent rounded-full ">
            <span><FaEthereum  size={20} /></span>
        </div>
        <button type="button" className="absolute opacity-70 top-0 right-0 p-2">
            <BsInfoCircle size={22} />
        </button>
        <div>
            <p className="text-sm opacity-80">0xhdsd...kdfkdf</p>
            <p className="text-lg font-bold font-openSans tracking-tight">Etherium</p>
        </div>
    </div>
   
</div>
  )
}

export default Welcome