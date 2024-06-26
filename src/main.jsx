import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import Konten from './Pages/Konten.jsx';
import Kontendua from './Pages/Kontendua.jsx'

const router = createBrowserRouter([
    {
      path:"/",
      element: <App/>,
      children: [
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/Materi",
          element: <Konten/>
        },
        {
          path:"/Materidua",
          element: <Kontendua/>
        },
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
