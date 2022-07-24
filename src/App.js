import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import isEmpty from "./lib/isEmpty";
import Table from 'react-bootstrap/Table'
const initialFormValue = {
  name: "",
  email: "",
  mobile: "",
  country: "",
  city: "",
  state: "",
  message: "",
};

function App() {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});
  const [registration, setregistration] = useState([]);

  // function
  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
    console.log(formValue);
    //setValidateError(formData)
  };

  const {
    name,
    email,
    mobile,
    country,
    city,
    state,
    message,
  } = formValue;

  console.log(registration, "registrationregistrationregistration")

  const handleFormSubmit = async (e) => {
    //console.log("saran");
    e.preventDefault();
    let errors = {},


      emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;


    if (isEmpty(name)) {
      errors.name = "Name field is required";
    }

    if (isEmpty(email)) {
      errors.email = "Email field is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }


    if (isEmpty(errors)) {
      // alert("form submitted success")
      let final = {
        name,
        email,
        mobile,
        country,
        city,
        state,
        message,
      };
      console.log(final, "registrationregistrationregistration")
      setregistration([...registration, final])
      setValidateError({});
      window.location = "#submit";
    } else {

      setValidateError(errors);


    }
  };



  return (
    <Container>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Registraion Form</Card.Title>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" id="name" value={name} onChange={onChange} placeholder="Enter Your Name" />
              {validateError.name && (
                <Form.Text className="validatetxt">
                  {validateError.name}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" id="email" value={email} onChange={onChange} placeholder="Enter Your Email" />
              {validateError.email && (
                <Form.Text className="validatetxt">
                  {validateError.email}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control name="mobile" id="mobile" value={mobile} onChange={onChange} placeholder="Enter Your Mobile Number" />
              {validateError.mobile && (
                <Form.Text className="validatetxt">
                  {validateError.mobile}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control name="country" id="country" value={country} onChange={onChange} placeholder="Enter Your Country" />
              {validateError.country && (
                <Form.Text className="validatetxt">
                  {validateError.country}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" id="city" value={city} onChange={onChange} placeholder="Enter Your City" />
              {validateError.city && (
                <Form.Text className="validatetxt">
                  {validateError.city}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control name="state" id="state" value={state} onChange={onChange} placeholder="Enter Your State" />
              {validateError.state && (
                <Form.Text className="validatetxt">
                  {validateError.state}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" id="message" value={message} onChange={onChange} rows={3} />
              {validateError.message && (
                <Form.Text className="validatetxt">
                  {validateError.message}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" className="register_btn" type="submit" >
              Register
            </Button>

          </Form>

        </Card.Body>
      </Card>
      {registration.length ? <Card style={{ width: '100%' }} id="submit">
        <Card.Body>
          <Card.Title>Registraion List</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Country</th>
                <th>City</th>
                <th>State</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {registration.length && registration.map((element, index) => <tr key={element.email}>
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.mobile}</td>
                <td>{element.country}</td>
                <td>{element.city}</td>
                <td>{element.state}</td>
                <td>{element.message}</td>
              </tr>)}
            </tbody>
          </Table>
        </Card.Body>
      </Card> : null}
    </Container>
  );
}

export default App;
