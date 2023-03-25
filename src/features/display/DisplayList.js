import { Col, Row } from "reactstrap";
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
	const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

	return (
		<Row>
			{items.map((item, index) => {
				return (
					<Col md className='m-1' key={index}>
						<DisplayCard item={item} />
					</Col>
				);
			})}
		</Row>
	);
};

export default DisplayList;