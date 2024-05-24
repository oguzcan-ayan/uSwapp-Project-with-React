import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout';
import ErrorPage from '../../pages/ErrorPage';
import HomePageLayout from '../../Layouts/HomePageLayout';
import ProductAddLayout from '../../Layouts/ProductAddLayout';
import ProductAddPage from '../../pages/ProductAddPage';
import ProductViewLayout from '../../Layouts/ProductViewLayout';
import ProductViewPage from '../../pages/ProductViewPage';
import UserProfileLayout from '../../Layouts/UserProfileLayout';
import UserProfile from '../../pages/UserProfile';


export const router = [

  {
    name: "Homepage",
    link: "/",
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    breadcrumb: "Homepage",
    children: [
      {
        index: true,
        element: <HomePageLayout />,
      },
      {
        name: "Product Add",
        link: "/product-add",
        path: "product-add",
        element: <ProductAddLayout />,
        breadcrumb: "Product Add",
        children: [
          {
            index: true,
            element: <ProductAddPage />
          },
          {
            name: "Product View",
            link: "/product-add/product-view",
            path: "product-view",
            element: <ProductViewLayout />,
            breadcrumb: "Product View",
            children: [
              {
                index: true,
                element: <ProductViewPage />
              },
              {
                name: "User Profile",
                link: "/product-add/product-view/user-profile",
                path: "user-profile",
                element: <UserProfileLayout />,
                breadcrumb: "User Profile",
                children: [
                  {
                    index: true,
                    element: <UserProfile />
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

export default createBrowserRouter(router);