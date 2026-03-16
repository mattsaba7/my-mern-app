import ProductCarouselComponent from '../components/user/ProductCarouselComponent';
import CategoryCardComponent from '../components/user/CategoryCardComponent';
import { Row, Container, Col } from 'react-bootstrap';

const HomePage = () => {
  const categories = [
    'tablets',
    'monitors',
    'games',
    'printers',
    'software',
    'cameras',
    'books',
    'videos',
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

/* Imported Row and Container into HomePage.jsx
Added a HomePage function that contains a categories array. Within the return statement the array is mapped through with a
Row component that's within a Container component. (why does putting the row within the Container component cause the cards
to not extend to the full width of the page?) 
added the map() method to iterate through the categories array. 
Passed category and index as props (are they props or arguments?) to the CategoryCardComponent. 
Now, within the Card.Title component (is it a component?) within the CategoryCardComponent, the title is dynamically rendered by passing the category prop (am I saying this
correctly?) to it. */
