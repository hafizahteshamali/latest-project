import Banner from "../../Components/Common/Banner/Banner"
import { BannerData2 } from "../../Components/Common/Banner/BannerData"
import EccomerceHeader from "../../Components/Common/EccomerceHeader/EccomerceHeader"
import ShopLayout from "./ShopLayout"

const ShopLeftSidebar = () => {
  return (
    <div>
        <Banner data={BannerData2}/>
        <EccomerceHeader/>
        <ShopLayout/>
    </div>
  )
}

export default ShopLeftSidebar