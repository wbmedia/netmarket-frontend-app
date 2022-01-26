import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getProductos } from '../../actions/ProductoAction';
import useStyles from "../../theme/useStyles";

const Productos = (props) => {
  const [paginadorProductos, setPaginadorProductos] = useState({
    count: 0,
    pageIndex: 0,
    pageSize: 0,
    data: [],
  });

  useEffect(() => {
    const getListaProductos = async () => {
        const response = await getProductos();
        console.log(response.data);
        setPaginadorProductos(response.data);
    }
    getListaProductos()
  }, [])
  const verProducto = (id) => {
    props.history.push("/detalleProducto/" + id);
  };

  const classes = useStyles();

  if(!paginadorProductos.data) {
      return null
  }

  console.log(paginadorProductos.data)

  return (
    <Container className={classes.containermt}>
      <Typography variant="h4" className={classes.text_title}>
        Productos
      </Typography>
      <Grid container spacing={4}> 
        {paginadorProductos.data.map(data => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={data.id}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg"
                title="mi producto"
              >
                <Avatar variant="square" className={classes.price}>
                  ${data.precio}
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography variant="h6" className={classes.text_card}>
                  {data.nombre}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => verProducto(data.id)}
                >
                  MAS DETALLES
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Productos;
