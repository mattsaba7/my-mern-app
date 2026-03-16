import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

function ProductCarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-1.png"
          alt="first slide"
        />

        <LinkContainer to="/product-details">
          <Carousel.Caption>
            <h3>Bestseller in Laptops Category</h3>
            <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-2.png"
          alt="second slide"
        />
        <LinkContainer to="/product-details">
          <Carousel.Caption>
            <h3>Bestseller in Laptops Category</h3>
            <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '300px', objectFit: 'cover' }}
          src="/images/carousel/carousel-3.png"
          alt="third slide"
        />
        <LinkContainer to="/product-details">
          <Carousel.Caption>
            <h3>Bestseller in Cameras Category</h3>
            <p>Check out our cameras.</p>
          </Carousel.Caption>
        </LinkContainer>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
