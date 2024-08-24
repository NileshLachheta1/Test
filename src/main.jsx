import ReactDOM ,{ createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements
} from "react-router-dom";

import {
  Home,
} from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
    </Route>
  )
  );

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
