import ProductCarouselComponent from '../components/user/ProductCarouselComponent';
import CategoryCardComponent from '../components/user/CategoryCardComponent';
import { Row, Container, Col } from 'react-bootstrap';

const HomePage = () => {
  const categories = [
    'Tablets',
    'Monitors',
    'Games',
    'Printers',
    'Software',
    'Cameras',
    'Books',
    'Videos',
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, index) => (
            <Col key={index}>
              <CategoryCardComponent
                key={index}
                category={category}
                index={index}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
