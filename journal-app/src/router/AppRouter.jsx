import { Navigate, createBrowserRouter } from "react-router-dom";
import { Register } from "../auth/pages/Register";
import { Login } from "../auth/pages/Login";
import { Journal } from "../journal/pages/Journal";
import { CheckingRoutes} from "./CheckingRoutes";




export const router = createBrowserRouter (
      [
        {
            path: "/auth",
            children: [
              {
                  path: "login",
                  element: <CheckingRoutes><Login /></CheckingRoutes>,
              },
              {
                path: "register",
                element: <CheckingRoutes><Register /></CheckingRoutes>,
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
              element: <CheckingRoutes><Journal /></CheckingRoutes>,
            },
            {
              path: "*",
              element: <Navigate to={"/"}/>,
            }
          ]
        },
      ]

)