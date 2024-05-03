import { createBrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";
import { HomePage } from "./09-useContext/HomePage";
import { AboutPage } from "./09-useContext/AboutPage";
import { LoginPage } from "./09-useContext/LoginPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
            path: "/",
            element: <HomePage />
            },
            {
            path: "/about",
            element: <AboutPage />,
            },
            {
            path: "/login",
            element: <LoginPage />,
            } 
        ]
    },
]);