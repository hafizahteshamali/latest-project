import { Col, Row } from "antd";
import Banner from "../../Components/Common/Banner/Banner";
import { BannerData3 } from "../../Components/Common/Banner/BannerData";
import Cards from "../../Components/Common/Cards/Cards";
import { CardsData } from "../../Components/Common/Cards/CardsData";
import DetailBanner from "../../Components/Common/DetailBanner/DetailBanner";
import TabsBanner from "../../Components/Tabs/Tabs";
import ImageBanner from "../../Components/ImageBanner/ImageBanner";

const ProductDetail = () => {
  return (
    <>
      <Banner data={BannerData3} />
      <DetailBanner />
      <TabsBanner />
      <div className="w-[1100px] m-auto my-5">
        <h1 className="text-3xl font-bold my-4">Related Products</h1>
        <Row gutter={[16, 16]}>
          {CardsData.map((item, index) => {
            return (
              <Col xs={24} sm={24} md={12} lg={6} xl={6} key={index} xs>
                <Cards data={item} />
              </Col>
            );
          })}
        </Row>
      </div>

      <ImageBanner/>
    </>
  );
};

export default ProductDetail;
