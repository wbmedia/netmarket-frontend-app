import HttpCliente  from "./../services/HttpClient";

export const getProductos = (request) => {
  return new Promise((resolve, reject) => {
    HttpCliente.get(`/api/producto?pageIndex=${request.pageIndex}&pageSize${request.pageSize}&search=${request.search}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


