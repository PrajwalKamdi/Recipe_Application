import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AllRecipe from "./Components/AllRecipe.jsx";
import Contact from "./Components/Contact.jsx";
import Service from "./Components/Service.jsx";
import SingleItem from "./Components/SingleItem.jsx";
import "./index.css";
import recipeStore from "./Store/Recipe.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App/>}>
      <Route path="/" element={<AllRecipe/>}/>
      <Route path="service" element={<Service/>} />
      <Route path="contact" element={<Contact/>}/>
      <Route path="/:id" element={<SingleItem/>}/>
      <Route path="id" element={<SingleItem/>}/>
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={recipeStore}>
      <RouterProvider router={router}>
       
      </RouterProvider>
    </Provider>
  </StrictMode>
);
