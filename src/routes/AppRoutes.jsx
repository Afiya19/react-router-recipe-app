import React, { Children } from "react";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import CategoryDetailPage from "../pages/CategoryDetailPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import FavoritesPage from "../pages/FavoritesPage";
import NotFoundPage from "../pages/NotFoundPage";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const routesConfig = [
    {
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> }, 
        { path: "categories", element: <CategoriesPage /> },
        { path: "category/:category", element: <CategoryDetailPage /> },
        { path: "recipe/:id", element: <RecipeDetailPage /> },
        { path: "favorites", element: <FavoritesPage /> },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ];
  return useRoutes(routesConfig);
};

export default AppRoutes;
