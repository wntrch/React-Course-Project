import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartner(state),
  ]);

  console.log("display items:", items);

  return (
    <Row>
      {items.map((item, index) => {
        return (
          item && (
            <Col md className="m-1" key={index}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
