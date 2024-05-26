import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage';
import HomePageLayout from '../../Layouts/HomePageLayout';
import ProductAddLayout from '../../Layouts/ProductAddLayout';
import ProductAddPage from '../../pages/ProductAddPage';
import ProductViewLayout from '../../Layouts/ProductViewLayout';
import ProductViewPage from '../../pages/ProductViewPage';
import UserProfileLayout from '../../Layouts/UserProfileLayout';
import UserProfile from '../../pages/UserProfile';
import App from '../../App/App';
import LoginAndSignupPage from '../../pages/LoginAndSignupPage';


export const router = createBrowserRouter([

  {
    name: "Homepage",
    link: "/",
    path: "/",
    element: <App />,
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
                  },
                ]
              }
            ]
          }
        ]
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
            name: "User Profile",
            link: "/product-add/user-profile",
            path: "user-profile",
            element: <UserProfileLayout />,
            breadcrumb: "User Profile",
            children: [
              {
                index: true,
                element: <UserProfile />
              },
              {
                name: "Product View",
                link: "/product-add/user-profile/product-view",
                path: "user-profile",
                element: <ProductViewLayout />,
                breadcrumb: "Product View",
                children: [
                  {
                    index: true,
                    element: <ProductViewPage />
                  },
                ]
              }
            ]
          }
        ]
      },

      {
        name: "Product View",
        link: "/product-view",
        path: "product-view",
        element: <ProductViewLayout />,
        breadcrumb: "Product View",
        children: [
          {
            index: true,
            element: <ProductViewPage />
          },
          {
            name: "Product Add",
            link: "/product-view/product-add",
            path: "product-add",
            element: <ProductAddLayout />,
            breadcrumb: "Product Add",
            children: [
              {
                index: true,
                element: <ProductAddPage />
              },
              {
                name: "User Profile",
                link: "/product-view/product-add/user-profile",
                path: "user-profile",
                element: <UserProfileLayout />,
                breadcrumb: "User Profile",
                children: [
                  {
                    index: true,
                    element: <UserProfile />
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Product View",
        link: "/product-view",
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
            link: "/product-view/user-profile",
            path: "user-profile",
            element: <UserProfileLayout />,
            breadcrumb: "User Profile",
            children: [
              {
                index: true,
                element: <UserProfile />
              },
              {
                name: "Product Add",
                link: "/product-view/user-profile/product-add",
                path: "product-add",
                element: <ProductAddLayout />,
                breadcrumb: "Product Add",
                children: [
                  {
                    index: true,
                    element: <ProductAddPage />
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "User Profile",
        link: "/user-profile",
        path: "user-profile",
        element: <UserProfileLayout />,
        breadcrumb: "User Profile",
        children: [
          {
            index: true,
            element: <UserProfile />
          },
          {
            name: "Product Add",
            link: "/user-profile/product-add",
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
                link: "/user-profile/product-add/product-view",
                path: "product-view",
                element: <ProductViewLayout />,
                breadcrumb: "Product View",
                children: [
                  {
                    index: true,
                    element: <ProductViewPage />
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "User Profile",
        link: "/user-profile",
        path: "user-profile",
        element: <UserProfileLayout />,
        breadcrumb: "User Profile",
        children: [
          {
            index: true,
            element: <UserProfile />
          },
          {
            name: "Product View",
            link: "/user-profile/product-view",
            path: "product-view",
            element: <ProductViewLayout />,
            breadcrumb: "Product View",
            children: [
              {
                index: true,
                element: <ProductViewPage />
              },
              {
                name: "Product Add",
                link: "/user-profile/product-add/product-view",
                path: "product-add",
                element: <ProductAddLayout />,
                breadcrumb: "Product Add",
                children: [
                  {
                    index: true,
                    element: <ProductAddPage />
                  },
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Login and Signup",
    link: "login-and-signup",
    path: "login-and-signup",
    element: <LoginAndSignupPage />,
    errorElement: <ErrorPage />,
    breadcrumb: "LoginandSignup"
  }
])

