import { Navigate, createBrowserRouter } from "react-router-dom";
import { Register } from "../auth/pages/Register";
import { Login } from "../auth/pages/Login";
import { Journal } from "../journal/pages/Journal";


export const router = createBrowserRouter ([

        {
            path: "/auth",
            children: [
              {
                  path: "login",
                  element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
              {
                path: "*",
                element: <Navigate to={"/auth/login"}/>,
              }
            ]
        },
        {
          path: "/",
          children: [
            {
              path: "/",
              element: <Journal />,
            },
            {
              path: "*",
              element: <Navigate to={"/"}/>,
            }
          ]
        },
])
