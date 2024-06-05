import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as routerLink} from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPass } from "../../store/auth";


const formData = {
  email: "jdoe@gmail.com",
  password: "123456",
};



export const Login = () => {
  

  const { status, errorMessage } = useSelector( state => state.auth);

  const dispatch = useDispatch();

  
  const { email, password, onInputChange, formState} = useForm(formData);

  
  const isAuthenticating = useMemo( () => status === "checking", [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPass(formState));
  };

  const onGoogleSignIn = () => {
    
    dispatch(startGoogleSignIn());

  }


  return (
    <AuthLayout title="Login">

      <form aria-label="submit-form" className="animate__animated animate__fadeIn animate__faster">
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label = "correo"
                type= "email"
                placeholder= "correo@gmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label= "contraseña"
                type= "password"
                placeholder= "Contraseña"
                fullWidth
                name="password"
                inputProps={{
                  "data-testid": "password"
                }}
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>

              <Grid item xs={ 12 } display={!!errorMessage? "": "none"}>
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>

              <Grid item xs={ 12 } sm= { 6 }>
                <Button 
                disabled={isAuthenticating}
                variant="contained" 
                fullWidth
                onClick={onSubmit}
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm= { 6 }>
                <Button 
                disabled={isAuthenticating}
                variant="contained" 
                aria-label="google-btn"
                fullWidth
                onClick={onGoogleSignIn}
                >
                  <Google />
                    <Typography sx={{ ml: 1}}>Google</Typography>                 
                </Button>
              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={routerLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
              
            </Grid>

          </Grid>

        </form>

    </AuthLayout>


  )
}
