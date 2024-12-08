import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { LuZoomIn } from "react-icons/lu";

const ProductBanner = ({data}) => {
    const {imgUrl, heading, cPrice, sPrice, stars, description} = data;
  return (
    <div className=" flex items-center gap-10 w-[1100px] my-10 m-auto">
        <img className="h-[300px] w[350px] object-cover" src={imgUrl} alt="" />
        <div>
            <div className="flex items-center gap-5">
            <h2 className="text-[18px] font-bold text-[#111C85]">{heading}</h2>
            <ul className="flex items-center gap-3">
                <li className="h-[15px] w-[15px] rounded-full bg-[#DE9034]"></li>
                <li className="h-[15px] w-[15px] rounded-full bg-[#E60584]"></li>
                <li className="h-[15px] w-[15px] rounded-full bg-[#5E37FF]"></li>
            </ul>
            </div>

            <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-[#111C85]">{cPrice}</h3>
            <h3 className="text-xl text-[#FF2AAA]"><s>{sPrice}</s></h3>
            <ul className="flex items-center gap-3">
                {stars.map((item, index)=>{
                    return(
                        <li key={index}><img src={item} alt="" /></li>
                    )
                })}
            </ul>
            </div>
            <p className="text-[#9295AA] my-4">{description}</p>
            <ul className="flex items-center gap-6 my-5">
                <li><a href=""><FiShoppingCart className="text-3xl font-bold" /></a></li>
                <li><a href=""><FaRegHeart className="text-3xl font-bold" /></a></li>
                <li><a href=""><LuZoomIn className="text-3xl font-bold" /></a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default ProductBanner