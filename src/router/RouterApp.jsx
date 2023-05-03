import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { App } from "../App";
import { ErrorScreen } from "../Screens/ErrorScreen";


export const RouterApp = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorScreen />,
            children: [
                {
                    path: '/',
                    element: <h1>Home </h1>
                },
                {
                    path: 'servicios',
                    element: <h1>Servicios </h1>
                },
                {
                    path: 'formulario',
                    element: <h1>Formulario </h1>
                },
            ]
        },

    ]);


    return (
        <RouterProvider router={router} />
    )
}

