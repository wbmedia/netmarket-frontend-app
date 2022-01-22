import {
  Container,
  Grid,
  Card,
  Avatar,
  Icon,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./../../theme/useStyles";

export const RegistrarUsuario = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containerMT}>
      <Grid container justify="center">
        <Grid item lg={6} md={8}>
          <Card className={classes.card} align="center">
            <Avatar className={classes.avatar}>
              <Icon className={classes.icon}>person_add</Icon>
            </Avatar>
            <form className={classes.form} onSubmit={e => {e.preventDefault()}}>
              <Grid container spacing={2}>
                <Grid item className={classes.gridMB} xs={12} md={12}>
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    type="text"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item className={classes.gridMB} xs={12} md={12}>
                  <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    type="text"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item className={classes.gridMB} xs={12} md={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item className={classes.gridMB} xs={12} md={12}>
                  <TextField
                    className={classes.noBorderRadius}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item className={classes.gridMB} xs={12} md={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className={classes.buttonSuccess}
                  >Registrar</Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
