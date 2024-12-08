import { Card } from "antd";
import "./Cards.css";

const Cards = ({data}) => {

    const {imgUrl, heading, stars, price} = data;

  return (
    <div className="w-[1100px] m-auto">
      <Card
        hoverable
        style={{
          width: 270,
        }}
        cover={
          <img
            alt="example"
            src={imgUrl}
          />
        }
      >

        <div className="flex justify-between w-[100%]">
            <h2>{heading}</h2>
            <ul className="flex">
                {stars.map((item, index)=>{
                    return(
                        <li key={index}><img src={item} alt="" /></li>
                    )
                })}
            </ul>
        </div>
        <p>{price}</p>
      </Card>
    </div>
  );
};

export default Cards;
