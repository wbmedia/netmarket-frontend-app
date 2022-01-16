let booksArray = [];
let key = 0;

export const addBook = (book) => {
  let booksJson = book;
  key++;
  booksJson.key = key;
  booksArray.push(booksJson);

  console.log("booksArray:", booksArray);
};

export const listarBooks = () => {
  return booksArray;
};

export const obtenerLibroKey = (clave) => {
  const objBook = booksArray.find((libro) => {
    return libro.key === clave;
  });
  return objBook;
};

export const editarLibro = (dataLibro) => {
  booksArray.forEach((libro) => {
    if (dataLibro.key === libro.key) {
      libro.categoria = dataLibro.categoriaE;
      libro.titulo = dataLibro.tituloE;
      libro.autor = dataLibro.autorE;
    }
  });
  return booksArray;
};

export const eliminarLibro = (dataLibro) => {
  booksArray = booksArray.filter((objLibro) => {
    return objLibro.key !== dataLibro.key;
  });
  const nuevaDataLibros = listarBooks()
  return nuevaDataLibros
};
