import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telnum, setTelnum] = useState('');
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [contactType, setContactType] = useState('Tel.');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    telnum: false,
    email: false,
  });
  const STATES = {
    firstName: setFirstName,
    lastName: setLastName,
    telnum: setTelnum,
    email: setEmail,
    agree: setAgree,
    contactType: setContactType,
    message: setMessage,
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    STATES[name](value);
  };

  const handleSubmit = (e) => {
    const stateObj = {
      firstName,
      lastName,
      telnum,
      email,
      agree,
      contactType,
      message,
    };
    console.log('Current state is: ' + JSON.stringify(stateObj));
    alert('Current state is: ' + JSON.stringify(stateObj));
    e.preventDefault();
  };

  const handleBlur = (field) => (e) => {
    setTouched((prev) => {
      prev[field] = true;
      return prev;
    });
  };

  const validate = (firstName, lastName, telnum, email) => {
    const errors = {
      firstName: '',
      lastName: '',
      telnum: '',
      email: '',
    };
    if (touched.firstName && firstName.length < 3) {
      errors.firstName = 'First name should be >= 3 characters';
    } else if (touched.firstName && firstName.length > 10) {
      errors.firstName = 'First name should be <= 10 characters';
    }

    if (touched.lastName && lastName.length < 3) {
      errors.lastName = 'Last name should be >= 3 characters';
    } else if (touched.lastName && lastName.length > 10) {
      errors.lastName = 'Last name should be <= 10 characters';
    }

    const regex = /^\d+$/;
    if (touched.telnum && !regex.test(telnum)) {
      errors.telnum = 'Tel. number should contain only numbers';
    }
    if (
      touched.email &&
      email.split('').filter((c) => c === '@').length !== 1
    ) {
      errors.email = 'Email should contain a @';
    }

    return errors;
  };

  const errors = validate(firstName, lastName, telnum, email);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div class="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i class="fa fa-phone fa-lg"></i> Tel.: +852 1234 5678
            <br />
            <i class="fa fa-fax fa-lg"></i> Fax: +852 8765 4321
            <br />
            <i class="fa fa-envelope fa-lg"></i> Email:
            <a href="mailto:confusion@food.net"> confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div class="col-12 col-sm-11 offset-sm-1">
          <div class="btn-group" role="group">
            <a
              href="tel:+85212345678"
              role="button"
              className="btn btn-primary"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a href="#" role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              href="mailto:confusion@food.net"
              role="button"
              className="btn btn-success"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your feedback</h3>
        </div>
        <div className="col-12 col-nd-9">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  valid={errors.firstName === ''}
                  invalid={errors.firstName !== ''}
                  onBlur={handleBlur('firstName')}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  valid={errors.lastName === ''}
                  invalid={errors.lastName !== ''}
                  onBlur={handleBlur('lastName')}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.lastName}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Input
                  type="tel"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. number"
                  value={telnum}
                  valid={errors.telnum === ''}
                  invalid={errors.telnum !== ''}
                  onBlur={handleBlur('telnum')}
                  onChange={handleInputChange}
                />
                <FormFeedback>{errors.telnum}</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  valid={errors.email === ''}
                  invalid={errors.email !== ''}
                  onBlur={handleBlur('email')}
                  onChange={handleInputChange}
                />
              </Col>
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      placeholder="Tel. number"
                      check={agree}
                      onChange={handleInputChange}
                    />
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input
                  type="select"
                  name="contactType"
                  value={contactType}
                  onChange={handleInputChange}
                >
                  <option>Tel.</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textaera"
                  id="message"
                  name="message"
                  rows="12"
                  value={message}
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
