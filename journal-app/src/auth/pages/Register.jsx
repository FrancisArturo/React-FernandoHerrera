import { Link as routerLink} from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const Register = () => {
  return (
    <AuthLayout title="Registro">

      <form action="">
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label = "Nombre Completo"
                type= "text"
                placeholder= "John Doe"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label = "correo"
                type= "email"
                placeholder= "correo@gmail.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label= "contraseña"
                type= "password"
                placeholder= "Contraseña"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>

              <Grid item xs={ 12 }>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>


            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={routerLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
              
            </Grid>

          </Grid>

        </form>

    </AuthLayout>


  )
}
