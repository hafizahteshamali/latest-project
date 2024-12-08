import { FaArrowRight } from "react-icons/fa6";

const Description = ({ data }) => {
  const { heading, para1, bulletHeading, points } = data;
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#151875]">{heading}</h1>
      <p className="text-[14px] text-[#A9ACC6]">{para1}</p>
      <ul className="my-6">
        <li>
          <h2 className="text-2xl font-bold text-[#151875]">{bulletHeading}</h2>
        </li>
        {points.map((item, index) => {
          return (
            <li
              className="flex items-center gap-5 text-[14px] text-[#A9ACC6]"
              key={index}
            >
              <FaArrowRight className="text-2xl text-[#2F1AC4]" /> {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Description;
