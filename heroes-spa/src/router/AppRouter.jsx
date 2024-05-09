import { createBrowserRouter } from "react-router-dom";
import { Marvel, Dc, Search, Hero } from "../heroes";
import { HeroesApp } from "../HeroesApp";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../auth";
import { PublicRoute } from "./PublicRoute";


export const router = createBrowserRouter ([

        {
            path: "/",
            element: <PrivateRoute ><HeroesApp /> </PrivateRoute>,
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
                    path: "/hero/:id",
                    element: <Hero />,
                }
            ]
        },
        {
            path: "/login",
            element: <PublicRoute> <Login /> </PublicRoute>,
        }
])

    
