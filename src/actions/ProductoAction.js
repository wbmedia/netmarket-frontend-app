import { requestGenerico } from "./../services/HttpClient";

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    requestGenerico.get("/api/producto")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
