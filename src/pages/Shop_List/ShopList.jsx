import Banner from "../../Components/Common/Banner/Banner.jsx";
import { BannerData1 } from "../../Components/Common/Banner/BannerData";
import EccomerceHeader from "../../Components/Common/EccomerceHeader/EccomerceHeader.jsx";
import ProductBanner from "../../Components/Common/ProductBanner/ProductBanner.jsx";
import { ProductBannerData } from "../../Components/Common/ProductBanner/ProductBannerData.js";

const ShopList = () => {
  return (
    <>
      <Banner data={BannerData1}/>
      <EccomerceHeader/>
      <div>
        {ProductBannerData.map((item, index)=>{
          return(
            <ProductBanner key={index} data={item}/>
          )
        })}
      </div>
    </>
  )
}

export default ShopList