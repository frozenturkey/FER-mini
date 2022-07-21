import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const Header = () => {
  let username = '', password = '', remember = '';
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleLogin = (e) => {
    toggleModal();
    alert(
      'Username: ' +
        username.value +
        ' Password: ' +
        password.value +
        ' Remember: ' +
        remember.checked
    );
    e.preventDefault();
  };

  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src={'assets/images/logo.png'} alt="Logo" height="30" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse className="display-flex" isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home fa-lg"></span> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info fa-lg"></span> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/menu">
                  <span className="fa fa-list fa-lg"></span> Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline onClick={toggleModal}>
                  <span className="fa fa-sign-in fa-lg"></span> Login
                </Button>
              </NavItem>
            </Nav>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}>Login</ModalHeader>
              <ModalBody>
                <Form onSubmit={handleLogin}>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      innerRef={(input) => (username = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      innerRef={(input) => (password = input)}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="remember"
                        innerRef={(input) => (remember = input)}
                      />{' '}
                      Remember me
                    </Label>
                  </FormGroup>
                  <Button type="submit" value="Submit" color="primary">
                    Login
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience.
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Header;
