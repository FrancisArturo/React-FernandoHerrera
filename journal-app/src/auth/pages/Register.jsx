import { useDispatch, useSelector } from "react-redux";
import { Link as routerLink} from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPass } from "../../store/auth";




const formValidations = {
  email: [ (value) => value.includes("@"), "El correo debe tener un @"],
  password: [ (value) => value.length >= 6, "La contraseña debe tener al menos 6 letras"],
  displayName: [ (value) => value.length >= 1, "El nombre es obligatorio"],
}



export const Register = () => {

  const dispatch = useDispatch();

  const [formSubmited, setFormSubmited] = useState(false);

  const { status, errorMessage} = useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === "checking", [status]);

  const { formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm({
    email: "",
    password: "",
    displayName: ""
  }, formValidations);

  const onSubmit = (event) =>{
    event.preventDefault();
    setFormSubmited(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithEmailPass(formState));
  }

  return (
    <AuthLayout title="Registro">

      <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label = "Nombre Completo"
                type= "text"
                placeholder= "John Doe"
                fullWidth
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmited}
                helperText={displayNameValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label = "correo"
                type= "email"
                placeholder= "correo@gmail.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmited}
                helperText={emailValid}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2}}>
              <TextField 
                label= "contraseña"
                type= "password"
                placeholder= "Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmited}
                helperText={passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>

              <Grid item xs={ 12 } display={!!errorMessage? "": "none"}>
                <Alert severity="error">
                  {errorMessage}
                </Alert>
              </Grid>

              <Grid item xs={ 12 }>
                <Button 
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained" 
                fullWidth
                >
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
