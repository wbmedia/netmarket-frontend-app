import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { RegistrarUsuario } from "./components/seguridad/RegistrarUsuario";
import { theme } from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegistrarUsuario />
    </ThemeProvider>
  );
}

export default App;
