import HttpCliente from "./../services/HttpClient";

export const registrarUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    HttpCliente.post("/api/usuario/registrar", usuario)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        resolve(error.response);
        reject(error.response);
      });
  });
};
