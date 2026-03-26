import { Button, Col, Container, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import ProductForListComponent from '../components/ProductForListComponent.jsx';
import PaginationComponent from '../components/PaginationComponent.jsx';
import AttributesFilterComponent from '../components/filterQueryResultOptions/AttributesFilterComponent.jsx';
import CategoryFilterComponent from '../components/filterQueryResultOptions/CategoryFilterComponent.jsx';
import RatingFilterComponent from '../components/filterQueryResultOptions/RatingFilterComponent.jsx';
import SortOptionsComponent from '../components/SortOptionsComponent.jsx';
import PriceFilterComponent from '../components/filterQueryResultOptions/PriceFilterComponent.jsx';

const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className='mb-3 mt-3'>
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary" className="me-2">Filter</Button>
              <Button variant="danger">Reset Filters</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <ProductForListComponent />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;

/* The current section was updating the ProductListPage. A grid layout was 
constructed using Container, Row and Col from react-bootstrap. New components
were created by copying in code from the react-bootstrap website: 
SortOptionsComponent, PriceFilterComponent, RatingFilterComponent, 
CategoryFilterComponent, AttributesFilterComponent, ProductForListComponent,
and PaginationComponent.

I'm thinking the commit message should look like 
git commit -m "feat(product list): implment product list page with a drop-down
menu, a range bar for price, a filtered list using checkboxes, color green (what's 
this doing?) with two buttons: primary and danger"

Then, for the PR description I could use: 
## Summary
Implements an interactive UI for the product list, creating filter functionality

## Changes
- Added: filterQueryResultOptions directory with four
files: AttributesFilterComponent.jsx, CategoryFilterComponent.jsx,
PriceFilterComponent.jsx, RatingFilterComponent.jsx
- Additional Files Added: PaginationComponent, 
ProductForListcomponent, and SortOptionsComponent. 
Chore: Capitalized all of the categories within the 
categories array of the HomePage component. */