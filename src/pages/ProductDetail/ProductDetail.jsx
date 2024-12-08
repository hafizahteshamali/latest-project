import Banner from "../../Components/Common/Banner/Banner"
import { BannerData3 } from "../../Components/Common/Banner/BannerData"
import DetailBanner from "../../Components/Common/DetailBanner/DetailBanner"
import TabsBanner from "../../Components/Tabs/Tabs"

const ProductDetail = () => {
  return (
    <>
    <Banner data={BannerData3}/>
    <DetailBanner/>
    <TabsBanner/>
    </>
  )
}

export default ProductDetail