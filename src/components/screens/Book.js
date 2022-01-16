import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Table,
  Modal,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  addBook,
  listarBooks,
  obtenerLibroKey,
  editarLibro,
  eliminarLibro,
} from "./../books/AddBooks";

export const Book = () => {
  const success = () => toast.success("Libro Agregado Correctamente 📚");
  const edit = () => toast.warning("Libro Editado Correctamente ✔ ");
  const [show, setShow] = useState(false);

  const clearLibro = {
    categoria: "",
    titulo: "",
    autor: "",
  };

  const [book, setBooks] = useState({
    categoria: "",
    titulo: "",
    autor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardarData = () => {
    setBooks(clearLibro);
    addBook(book);
    success();
  };

  const [booksArr, setBooksArr] = useState([]);

  const listBooks = () => {
    const data = listarBooks();
    setBooksArr(data);
  };

  useEffect(() => {
    listBooks();
  }, [booksArr.length]);

  const abrirDialog = (key) => {
    const dataLibro = obtenerLibroKey(key);
    setBooksEdit({
      key: key,
      categoriaE: dataLibro.categoria,
      tituloE: dataLibro.titulo,
      autorE: dataLibro.autor,
    });
    setShow(true);
  };

  const [bookEdit, setBooksEdit] = useState({
    key: 0,
    categoriaE: "",
    tituloE: "",
    autorE: "",
  });

  const handlerEditar = (e) => {
    const { name, value } = e.target;
    setBooksEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const editarData = () => {
    edit();
    setShow(false);
    const nuevaData = editarLibro(bookEdit);
    return nuevaData;
  };

  const eliminarData = (data) => {
    const listaNuevaLibros = eliminarLibro(data);
    setBooksArr(listaNuevaLibros);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Title>Books</Card.Title>
            <Card.Body>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
              />
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="formBasicSelect">
                  <Form.Label>Seleccionar Libro</Form.Label>
                  <Form.Select
                    name="categoria"
                    onChange={handleChange}
                    value={book.categoria}
                  >
                    <option>Seleciona Libro</option>
                    <option>Programación</option>
                    <option>Historia</option>
                    <option>Matematicas</option>
                    <option>México</option>
                    <option>Biólogia</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="titulo"
                    value={book.titulo}
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    name="autor"
                    value={book.autor}
                  ></Form.Control>
                </Form.Group>
                <Button
                  disabled={!book.titulo || !book.categoria || !book.autor}
                  className="mt-3"
                  onClick={guardarData}
                  color="primary"
                >
                  <i className="fal fa-save"></i>
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table className="mt-3 mb-3">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Titulo</th>
                <th>Autor</th>
                <th colSpan={2}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {booksArr.map((bookObj) => (
                <tr key={bookObj.key}>
                  <td>{bookObj.categoria}</td>
                  <td>{bookObj.titulo}</td>
                  <td>{bookObj.autor}</td>
                  <td>
                    <Button
                      onClick={() => abrirDialog(bookObj.key)}
                      variant="primary"
                      style={{ marginRight: "5px" }}
                    >
                      <i className="fal fa-marker"></i>
                    </Button>
                    <Button
                      onClick={() => eliminarData(bookObj)}
                      variant="danger"
                    >
                      <i className="fad fa-trash-alt"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Libro - {bookEdit.tituloE}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Form.Group controlId="formBasicSelect">
                <Form.Label>Seleccionar Libro</Form.Label>
                <Form.Select
                  name="categoriaE"
                  onChange={handlerEditar}
                  value={bookEdit.categoriaE}
                >
                  <option>Seleciona Libro</option>
                  <option>Programación</option>
                  <option>Historia</option>
                  <option>Matematicas</option>
                  <option>México</option>
                  <option>Biólogia</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Titulo</Form.Label>
                <Form.Control
                  onChange={handlerEditar}
                  type="text"
                  name="tituloE"
                  value={bookEdit.tituloE}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  onChange={handlerEditar}
                  type="text"
                  name="autorE"
                  value={bookEdit.autorE}
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={
                  !bookEdit.tituloE || !bookEdit.autorE || !bookEdit.categoriaE
                }
                className="mt-3"
                onClick={editarData}
                color="primary"
              >
                <i className="fal fa-save"></i>
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
};
