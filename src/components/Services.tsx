import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import Service from "./card/Service";

const Services = () => {
  return (
    <section className="w-full h-full md:flex-row flex-col pb-10 relative gap-10 min-h-[30dvh] flex items-center  justify-around">
      <div className="absolute -z-20 top-1/2 w-[350px] left-1/4 h-[300px] rounded-full blur-3xl opacity-30 bg-gradient-to-tl from-pink-500 via-indigo-400 to-blue-400" />
      <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[580px]" data-aos="fade-right">
        <h1 className="text-[32px] pb-2 md:text-[48px]">
        Services that we
          <br />
          continue to improve
        </h1>
        <p className="leading-8 text-white/60">
        The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer.
        </p>
      </div>
      <div className="flex flex-col gap-6" >
      <Service
          idx={1}
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={30} />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <Service
          idx={2}
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={30} />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <Service
          idx={3}
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={30} />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </section>
  )
}

export default Services