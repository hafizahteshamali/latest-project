import { BsFillGridFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
const EccomerceHeader = () => {
  return (
    <div className="w-full h-[100px]">
        <div className="w-[1100px] m-auto flex justify-between items-center p-2 h-[100px]">
            <div>
            <h2 className="text-xl text-[#151875] font-bold">Ecommerce Acceories & Fashion item </h2>
            <p className="text-[#8A8FB9] text-[10px]">About 9,620 results (0.62 seconds)</p>
            </div>

            <div className="flex justify-center gap-4 items-center">
                <div className="flex gap-3 items-center">
                <label className="text-[#3F509E] text-xl">Per Page:</label>
                <input className="w-[70px] bg-transparent border-[2px] border-[#E7E6EF]" type="text" />
                </div>

                <div className="flex gap-3 items-center">
                <label className="text-[#3F509E] text-xl">Sort By:</label>
                <select className="bg-transparent text-[#8A8FB9] border-[2px] border-[#E7E6EF]">
                    <option className="text-[#8A8FB9]">Best Match</option>
                </select>
                </div>

                <div className="flex gap-3 items-center">
                <label className="text-[#3F509E] flex gap-1 items-center text-xl">View: <BsFillGridFill className="text-[#3F509E]" /> <TfiMenuAlt className="text-[#3F509E]" /></label>
                <input className="w-[150px] bg-transparent border-[2px] border-[#E7E6EF]" type="text" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default EccomerceHeader