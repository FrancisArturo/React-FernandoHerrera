import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { useEffect } from "react";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async(user) => {
            if (!user) return dispatch(logout());
            
            const { displayName, uid, photoURL, email} = user;
            dispatch(login({ displayName, uid, photoURL, email}));
            dispatch(startLoadingNotes());
        })
        
    }, [])

    return {
        status,
        pathname
    }
}