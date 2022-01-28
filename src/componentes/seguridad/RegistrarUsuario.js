import {
  Avatar,
  Button,
  Card,
  Container,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../../theme/useStyles";
import { Link } from "react-router-dom";
import { registrarUsuario } from "../../actions/UsuarioAction";

const clearUsuario = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  username: "",
};

const RegistrarUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const guardarUsuario = () => {
    registrarUsuario(usuario).then((response) => {
      console.log(`response: ${JSON.stringify(response)}`);
      window.localStorage.setItem('token', response.data.token);
    });
    setUsuario(clearUsuario);
  };

  const classes = useStyles();
  return (
    <Container className={classes.containermt}>
      <Grid container justify="center">
        <Grid item lg={6} md={8}>
          <Card className={classes.card} align="center">
            <Avatar className={classes.avatar}>
              <Icon className={classes.icon}>person_add</Icon>
            </Avatar>
            <Typography variant="h5" color="primary">
              Registro de Usuario
            </Typography>

            <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    name="username"
                    value={usuario.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={usuario.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item md={12} xs={12} className={classes.gridmb}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={guardarUsuario}
                    type="submit"
                  >
                    Registrar
                  </Button>
                </Grid>
              </Grid>
              <Link to="/login" variant="body1" className={classes.link}>
                ¿Ya tienes una cuenta?, Logueate
              </Link>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrarUsuario;
