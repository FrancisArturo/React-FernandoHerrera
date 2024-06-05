import { loginWithEmailPass, logoutFirebase, registerUserWithEmailPass, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startCreatingUserWithEmailPass, startGoogleSignIn, startLoginWithEmailPass, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser, notAuthenticatedState } from "../../fixtures/authFixtures";


jest.mock("../../../src/firebase/providers");

describe('pruebas en thunks.js', () => {

    const dispatch = jest.fn();

    beforeEach ( () => jest.clearAllMocks());
    
    test('debe invocar el checkingCredentials', async () => {
        
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('startGoogleSignIn debe llamar checkingCredentials y login - exito', async () => {
        
        const loginData = {ok: true, ...demoUser};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startGoogleSignIn debe llamar checkingCredentials y logout - error', async () => {
        
        const loginData = {ok: false, errorMessage: "error en la autenticacion con google"};
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test('startLoginWithEmailPass debe llamar a checkingCredentials y login - Exito', async () => {
        
        const loginData = {ok: true, ...demoUser};
        const formData = { email: demoUser.email, password: demoUser.password};

        await loginWithEmailPass.mockResolvedValue(loginData);

        await startLoginWithEmailPass(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(demoUser));
    });

    test('startLoginWithEmailPass debe llamar a checkingCredentials y login - error', async () => {
        
        const loginData = {ok: false, errorMessage: "error en la autenticacion"};
        const formData = { email: "jdoe@google.com", password: "2342565"};

        await loginWithEmailPass.mockResolvedValue(loginData);

        await startLoginWithEmailPass(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({errorMessage: loginData.errorMessage}));
    });

    test('startCreatingUserWithEmailPass debe llamar a checkingCredentials y login - exito', async () => {
        
        const formData = { email: demoUser.email, password: demoUser.password, displayName: demoUser.displayName};
        const createUserData = {ok: true, photoURL: demoUser.photoURL, uid: demoUser.uid};
        
        await registerUserWithEmailPass.mockResolvedValue(createUserData);

        await startCreatingUserWithEmailPass(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login({photoURL: createUserData.photoURL, uid: createUserData.uid, displayName: formData.displayName, email: formData.email}));
    });

    test('startCreatingUserWithEmailPass debe llamar a checkingCredentials y logout - error', async () => {
        
        const formData = { email: demoUser.email, password: demoUser.password, displayName: demoUser.displayName};
        const createUserData = {ok: false, errorMessage: "error en la creacion de usuario"};
        
        await registerUserWithEmailPass.mockResolvedValue(createUserData);

        await startCreatingUserWithEmailPass(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({errorMessage: createUserData.errorMessage}));
    });

    test('startLogout debe llamar logoutFirebase, clearNotes y logout', async () => {
        
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: null}));
    });
});