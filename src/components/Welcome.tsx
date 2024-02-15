import { FaEthereum } from "react-icons/fa";
const Welcome = () => {
  return (
    <div className='flex items-center w-full justify-around min-h-96'>
        <div className=" flex flex-col gap-6">
            <h1 className='text-4xl'>Send Crypto <br /> across the world</h1>
            <p className="opacity-60">Explore the crypto world. Buy and Sell <br /> cryptocurrency easily on ZwapToken</p>
        </div>
        <div className="p-3 max-w-[300px] w-full h-[300px] bg-gradient-to-tr from-pink-500 via-violet-400 to-indigo-500 rounded-md">
            <div className="p-2 border  max-w-[40px] transition duration-300 ease-out hover:text-black hover:bg-white hover:border-transparent rounded-full ">
                <span><FaEthereum  size={20} /></span>
            </div>
        </div>
    </div>
  )
}

export default Welcome