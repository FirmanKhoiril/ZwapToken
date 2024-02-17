import { useState } from "react"
import { MdArrowBack } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Input = ({type, placeholder, onChange, value}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} value={value} className="w-full placeholder:text-sm px-4 placeholder:text-white/40  drop-shadow-sm outline-none py-4 rounded-md bg-[#302b4e]" />
  )
}

const SendToken = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
  }

  const handleGoBack = () => navigate("/")
  return (
    <section className="min-h-[100dvh] font-openSans  w-full flex justify-center items-center relative">
      <form onSubmit={handleSubmit} className="max-w-[400px] py-4  justify-between w-full flex px-4 flex-col gap-3 min-h-[400px] rounded-md bg-[#25233a]">
        <div className="flex items-center gap-4 ">
          <button onClick={handleGoBack} type="button" className="p-2 rounded-full hover:bg-slate-50/20 bg-slate-50/10"><MdArrowBack size={25} /></button>
          <span className=" tracking-tight font-semibold text-lg">Sending Token</span>
        </div>
       <div className="flex flex-col gap-4 w-full border-b border-white/30 pb-4">
          <Input type="text" placeholder="Address to" />
          <Input type="number" placeholder="Amount(ETH)" />
          <Input type="text" placeholder="Keyword (GIF)" />
          <Input type="text" placeholder="Enter Message" />
       </div>
       <button type="submit" className="py-3 hover:bg-[#3a365e] font-semibold bg-[#2c2e44] w-full rounded-full">{loading ?"Sending" : "Send Now"}</button>
      </form>
    </section>
  )
}

export default SendToken