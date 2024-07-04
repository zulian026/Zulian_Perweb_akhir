import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Konten from "./Pages/Konten.jsx";
import Kontendua from "./Pages/Kontendua.jsx";
import ContactPages from "./Pages/ContactPages.jsx";
import AboutPages from "./Pages/AboutPages.jsx";
import Kontentigas from "./Pages/Kontentigas.jsx";
import Ajakpages from "./Pages/Ajakpages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Zulian_Perweb_akhir",
        element: <HomePage />,
      },
      {
        path: "/Zulian_Perweb_akhir/Materi",
        element: <Konten />,
      },
      {
        path: "/Zulian_Perweb_akhir/Materidua",
        element: <Kontendua />,
      },
      {
        path: "/Zulian_Perweb_akhir/Contact",
        element: <ContactPages />,
      },
      {
        path: "/Zulian_Perweb_akhir/About",
        element: <AboutPages />,
      },
      {
        path: "/Zulian_Perweb_akhir/Materitiga",
        element: <Kontentigas />,
      },
      {
        path: "/Zulian_Perweb_akhir/Ajax",
        element: <Ajakpages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
