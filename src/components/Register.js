import React, { useState } from "react";
import { Container, Row, Card, Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  const clearUsuario = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  }
  const [user, setUser] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardarUsuario = () => {
    setUser(clearUsuario)
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="mt-5">
              <Card.Title className="text-center mt-5">Registro</Card.Title>
              <Card.Body>
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Form.Group controlId="formBasicNombre" className="mb-2">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      name="nombre"
                      value={user.nombre}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Nombre"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicApellido" className="mb-2">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      name="apellidos"
                      value={user.apellidos}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter Apellidos"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mb-2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      className="btn btn-primary btn-block mt-3 full-block"
                      type="submit"
                      disabled={!user.nombre || !user.apellidos || !user.email || !user.password}
                      onClick={guardarUsuario}
                    >
                      Registrar
                    </Button>
                  </div>
                </Form>
                <Link to="login">Ya tienes cuenta</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
