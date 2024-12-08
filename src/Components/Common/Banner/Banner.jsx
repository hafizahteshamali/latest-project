import { NavLink } from "react-router-dom"
import "./Banner.css";

const Banner = ({data}) => {
  const {Heading, link1, link2, link3} = data;
  return (
    <div className="banner-wrapper w-full bg-[#F6F5FF] h-[200px]">
        <div className="w-[1100px] m-auto h-[200px] flex flex-col justify-center">
            <h2 className="text-3xl font-bold">{Heading}</h2>
            <ul className="flex justify-start items-center gap-5 my-2">
                <li><NavLink className="text-xl" to="/">{link1}</NavLink></li>
                <li><NavLink className="text-xl" to="/pages">{link2}</NavLink></li>
                <li><NavLink className="text-xl" to="/shopList">{link3}</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Banner