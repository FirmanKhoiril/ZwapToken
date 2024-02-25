import { TypeService } from "../../types/internal"


const Service = ({icon, color, title, subtitle}: TypeService) => {
  return (
   <div className="w-full px-4 md:px-8 py-4 h-full max-w-[700px] border border-white/20 transition duration-200 gap-4 bg-white/5 hover:bg-white/10 flex flex-row justify-center items-center rounded-md cursor-pointer">
        <div className={`${color} p-2 rounded-lg drop-shadow-lg `}>
          {icon}
        </div>
        <div className="p-2">
            <h1 className="text-3xl leading-[60px] font-openSans">{title}</h1>
            <p className=" sm:text-base text-sm opacity-80">{subtitle}</p>
        </div>
   </div>
  )
}

export default Service