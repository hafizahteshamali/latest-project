import { FaFacebook, FaRegHeart} from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const DetailBanner = () => {
  return (
    <div className="p-5 w-full bg-[#fff]">
        <div className=" w-[1100px] flex justify-between items-center m-auto">
            <div className="w-[20%] flex flex-col gap-2 justify-center items-center h-[500px]">
                <img className="object-[100%] h-[160px] w-[100%]" src="./assets/images/bag1.png" alt="" />
                <img className="object-[100%] h-[160px] w-[100%]" src="./assets/images/bag2.png" alt="" />
                <img className="object-[100%] h-[160px] w-[100%]" src="./assets/images/bag3.png" alt="" />
            </div>

            <div className="w-[75%] flex items-center">
                <img className="h-[500px] object-contain w-[50%]" src="./assets/images/bag4.png" alt="" />
                <div className="flex flex-col p-2">
                <h2 className="text-3xl font-bold">Playwood arm chair</h2>
                <ul className="flex gap-2 my-2">
                    <li><img src="./assets/images/star.png" alt="" /></li>
                    <li><img src="./assets/images/star.png" alt="" /></li>
                    <li><img src="./assets/images/star.png" alt="" /></li>
                    <li><img src="./assets/images/star.png" alt="" /></li>
                </ul>
                <ul className="flex gap-5 my-2">
                    <li className="text-xl text-[#151875]">$32.00</li>
                    <li className="text-[#FB2E86] text-xl"><s>$32.00</s></li>
                </ul>
                <h2 className="text-xl my-2 font-semibold">Color</h2>
                <p className="text-[#A9ACC6] my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                <button className="flex justify-center gap-5 text-[#151875] font-semibold my-2 items-center w-[70%] border-[2px] border-[#A9ACC6] rounded-lg p-2">Add to Cart <FaRegHeart /> </button>
                <h1 className="my-1 text-xl text-[#151875]">Categories:</h1>
                <h1 className="my-1 text-xl text-[#151875]">Tags</h1>
                <h1 className="my-1 text-xl text-[#151875]">Tags</h1>

                <ul className="flex items-center gap-4">
                    <li className="my-1 text-xl text-[#151875]"><h2>Share</h2></li>
                    <li><a href=""><FaFacebook className="text-3xl text-[#151875]" /></a></li>
                    <li><a href=""><FaSquareInstagram className="text-3xl text-[#151875]" /></a></li>
                    <li><a href=""><FaTwitterSquare className="text-3xl text-[#151875]" /></a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailBanner