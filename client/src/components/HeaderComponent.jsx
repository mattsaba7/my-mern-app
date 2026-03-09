import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Form,
  DropdownButton,
  Dropdown,
  Button,
  InputGroup,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">Best Online Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />{' '}
        {/* what is this doing? What does it correspond to in my nav bar? */}
        <Navbar.Collapse id="basic-navbar-nav">
          {' '}
          {/* What is the Navbar.Collapse doing? */}
          {/* Left Side Navigation */}
          <Nav className="me-auto">
            {' '}
            {/* What is the Nav and InputGroup doing? */}
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
                <Dropdown.Item>Books </Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Normal text" />{' '}
              {/* Is this basically a text field with placeholder text "Normal text"? */}
              <Button variant="warning">
                {' '}
                {/* Is this basically a submit button for what you type into the text field? Why does it have a variant of warning? What is a variant? Also, is the variant an 
              attribute or prop? */}
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/orders">
              <Nav.Link>
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown title="John Doe" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                eventKey="/user/my-orders"
                to="/user/my-orders"
              >
                {' '}
                {/* What does the eventKey do? */}
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} eventKey="/user" to="/user">
                {' '}
                {/* What does the eventKey do? */}
                My profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {' '}
                {/* What does the eventKey do? */}
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          {/* Right Side Navigation */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
