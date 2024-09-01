import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { Welcome } from "@/pages/Welcome";
import { Login } from "@/pages/Login";
import { Start } from "@/pages/startscreen";
import { Settings } from "@/pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "start",
    element: <Start />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
