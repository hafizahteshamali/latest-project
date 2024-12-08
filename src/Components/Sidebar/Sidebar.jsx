import { MdOutlineDownloadDone } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Sidebar = ({
  data1,
  data2,
  data3kiheading,
  SidebarData3,
  SidebarData4,
  SidebarData5,
  SidebarData6,
  SidebarData6kaHeadin
}) => {
  const { heading, text } = data1;
  return (
    <div className="w-[30%]">
      <ul className="my-8">
        <li>
          <h2 className="text-2xl  underline font-semibold m-5">{heading}</h2>
        </li>
        {text.map((item, index) => {
          return (
            <li className="flex gap-4 my-2 text-[#7E81A2]" key={index}>
              <MdOutlineDownloadDone className="text-[#7E81A2] text-2xl bg-[#E5E0FC]" />
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>

      <ul className="my-15">
        <li>
          <h2 className="text-2xl font-semibold  underline m-5">
            {data2.heading}
          </h2>
        </li>
        {data2.text.map((item, index) => {
          return (
            <li className="flex gap-4 my-2 text-[#7E81A2]" key={index}>
              <MdOutlineDownloadDone className="text-[#7E81A2] text-2xl bg-[#E5E0FC]" />
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>

      <ul className="my-14">
        <li>
          <h2 className="text-2xl font-semibold m-5 underline">
            {data3kiheading.heading}
          </h2>
        </li>
        {SidebarData3.map((item, index) => {
          const { ratingNum, starUrl } = item;
          return (
            <ul className="flex gap-4 items-center">
              <li className="my-2">
                <MdOutlineDownloadDone className="text-2xl bg-[#FFF6DA] text-[#FFCC2E]" />
              </li>
              <ul className="flex items-center gap-2">
                {starUrl.map((item, index) => {
                  return (
                    <li className="my-2" key={index}>
                      <img src={item} alt="" />
                    </li>
                  );
                })}
                <span className="font-bold text-xl">({ratingNum})</span>
              </ul>
            </ul>
          );
        })}
      </ul>

      <ul className="my-14">
        <li>
          <h2 className="text-2xl font-semibold  underline m-5">
            {SidebarData4.heading}
          </h2>
        </li>
        {SidebarData4.text.map((item, index) => {
          return (
            <li className="flex gap-4 my-2 text-[#7E81A2]" key={index}>
              <MdOutlineDownloadDone className="text-[#7E81A2] text-2xl bg-[#E5E0FC]" />
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>

      <ul className="my-14">
        <li>
          <h2 className="text-2xl font-semibold  underline m-5">
            {SidebarData5.heading}
          </h2>
        </li>
        {SidebarData5.text.map((item, index) => {
          return (
            <li className="flex gap-4 my-2 text-[#7E81A2]" key={index}>
              <MdOutlineDownloadDone className="text-[#7E81A2] text-2xl bg-[#E5E0FC]" />
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="w-[90%] rounded-md flex items-center border-[2px] border-[#BCBDDB]">
        <input
          placeholder="$10.00 - 20000$"
          type="text"
          className="h-[35px] p-[10px] text-xl w-[80%] bg-transparent"
        />
        <a href="">
          <IoSearchOutline className="text-3xl text-[#BCBDDB]" />
        </a>
      </div>

      <ul>
      <li>
          <h2 className="text-2xl font-semibold  underline m-5">
            {SidebarData6kaHeadin.heading}
          </h2>
        </li>
      </ul>
      
      <ul className="flex flex-wrap my-4 w-[300px] gap-6">
        {SidebarData6.map((item, index) => {
          return (
            <li className="flex items-center gap-3" key={index}>
              <img className="h-[15px] w-[15px] object-contain" src={item.img} alt="" />
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
