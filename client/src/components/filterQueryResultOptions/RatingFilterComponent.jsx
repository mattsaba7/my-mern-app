import { Rating } from 'react-simple-star-rating';
import Form from 'react-bootstrap/Form';
import { Fragment } from 'react';

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, index) => (
        <Fragment key={index}>
          <Form.Check type="checkbox" id={`check-api-${index}`}>
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label style={{ cursor: 'pointer' }}>
              <Rating size={20} initialValue={5 - index} />
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </>
  );
};

export default RatingFilterComponent;

/* git commit -m "feat(chat): complete rating filter component with header, 
five rows of selectable stars for filtering functionality"

##Summary
Implements the rating filter component, including five rows of stars 
that can be selected from 1-5 stars for filtering products. 

##Changes 
- Updated functionality of RatingFilterComponent
- Installed react simple star rating
- Rendered five rows of five stars each corresponding using Array.from().map()
*/