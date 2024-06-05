import { loginWithEmailPass, logoutFirebase, registerUserWithEmailPass, signInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch(logout( result.errorMessage));

        dispatch(login(result));
    }
}


export const startCreatingUserWithEmailPass = ({email, password, displayName}) => {

    return async( dispatch ) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailPass({email, password, displayName});

        if (!ok) return dispatch( logout({errorMessage}) );

        dispatch(login( {uid, photoURL, displayName, email}));

    }
}

export const startLoginWithEmailPass = ({email, password}) => {

    return async ( dispatch ) => {
        dispatch(checkingCredentials());

        const { ok, displayName, errorMessage, photoURL, uid} = await loginWithEmailPass({email, password});

        if (!ok) return dispatch( logout({errorMessage}));

        dispatch(login({ displayName, uid, photoURL, email}));
    
    } 

}

export const startLogout = () => {
    return async(dispatch) => {
        await(logoutFirebase());
        dispatch( clearNotesLogout());
        dispatch( logout({ errorMessage: null}));
        
    }
} 