import React from 'react'
import ShopList from './pages/Shop_List/ShopList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout'
import ShopLeftSidebar from './pages/ShopLeftSidebar/ShopLeftSidebar'
import ProductDetail from './pages/ProductDetail/ProductDetail'

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/shopList",
          element: <ShopList/>
        },
        {
          path: "/shopleftsidebar",
          element: <ShopLeftSidebar/>
        },
        {
          path: "/productdetails",
          element: <ProductDetail/>
        },
      ]
    }
  ])

  return(
    <RouterProvider router={Router}/>
  )
}

export default App