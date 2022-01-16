import React from "react";
import { Container, Row, Card, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-5">
            <Card.Title className="text-center mt-5">Login</Card.Title>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    className="btn btn-primary btn-block mt-3 full-block"
                    type="button"
                  >
                    Ingresar
                  </Button>
                  <span>
                    <Link to="olvidar-contrasena" className="mr-2">¿Olvidaste tu contraseña?</Link>
                    <Link to="/registrar">Registrarse</Link>
                  </span>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
