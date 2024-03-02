import { TypeService } from "../../types/internal"


const Service = ({icon, color, title, subtitle, idx}: TypeService) => {
  return (
   <div data-aos="fade-left" data-aos-delay={idx * 120} className="w-full pl-4 md:pl-8 pr-2 py-2 md:py-4 h-full max-w-[350px] sm:max-w-[450px] md:max-w-[650px] border border-white/20 transition duration-200 gap-4 bg-white/5 hover:bg-white/10 flex flex-row justify-center items-center rounded-md cursor-pointer">
        <div className={`${color} p-2 rounded-lg drop-shadow-lg `}>
          {icon}
        </div>
        <div className="p-1.5">
            <h1 className="text-xl sm:text-3xl leading-[50px] md:leading-[60px] font-openSans">{title}</h1>
            <p className=" sm:text-sm text-sm opacity-80">{subtitle}</p>
        </div>
   </div>
  )
}

export default Service