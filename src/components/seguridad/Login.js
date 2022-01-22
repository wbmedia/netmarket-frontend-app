import {
  Container,
  Grid,
  Card,
  Typography,
  Avatar,
  Icon,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./../../theme/useStyles";

export const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.containerMT}>
        <Grid container justify="center">
          <Grid item lg={5} md={6}>
            <Card align="center" className={classes.card}>
              <Avatar className={classes.avatar}>
                <Icon className={classes.icon}>person</Icon>
              </Avatar>
              <Typography variant="h5" color="primary">
                Ingrese su Usuario
              </Typography>
              <form
                className={classes.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} className={classes.gridMB}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      type="email"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} className={classes.gridMB}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      type="password"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} className={classes.gridMB}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className={classes.buttonSuccess}
                    >
                      Ingresar
                    </Button>
                  </Grid>
                </Grid>
                <Link className={classes.link} href="/" variant="body1">
                  ¿No tienes cuenta?, Registrate?
                </Link>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
