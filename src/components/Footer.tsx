import { LuCopyright } from "react-icons/lu";
import { FaLinkedin ,FaFacebook,FaXTwitter} from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="w-full bg-[#181b2e] min-h-[50px] space-y-4 py-4 border-t border-white/10 flex-wrap overflow-x-hidden flex items-center justify-around">
      <p className="flex opacity-80 items-center gap-1"><LuCopyright />Copyright By. ZendToken Company</p>
      <div className="flex items-center gap-5">
        <a href="" target="_blank">
          <FaLinkedin className="opacity-40 hover:opacity-100  transition duration-300" size={25} />
        </a>
        <a href="" target="_blank">
          <AiFillInstagram size={25} className="opacity-40 hover:opacity-100  transition duration-300" />
        </a>
        <a href="" target="_blank">
          <FaFacebook size={25} className="opacity-40 hover:opacity-100  transition duration-300" />
        </a>
        <a href="" target="_blank">
          <FaXTwitter size={25} className="opacity-40 hover:opacity-100  transition duration-300" />
        </a>
      </div>
    </footer>
  )
}

export default Footer