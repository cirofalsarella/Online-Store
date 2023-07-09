import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import { Home, Product, Edit } from "./pages/admin"
import { Cart, Item } from "./pages/client"
import { Profile } from "./pages/user"
import { Landing, Login, Register } from "./pages/web"

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/item",
        element: <Item />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/edit",
        element: <Edit />
      }
    ]
  }
])

export default rotas;