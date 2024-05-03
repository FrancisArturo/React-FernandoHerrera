import { createBrowserRouter } from "react-router-dom";
import { Marvel, Dc, Search, Hero } from "../heroes";
import { Login } from "../auth";
import { HeroesApp } from "../HeroesApp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        children: [
            {
                path: "/marvel",
                element: <Marvel />,
            },
            {
                path: "/dc",
                element: <Dc />,
            },
            {
                path: "/search",
                element: <Search />,
            },
            {
                path: "/hero",
                element: <Hero />,
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/*",
        element: <Login />,
    }
    
]);