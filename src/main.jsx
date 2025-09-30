import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ✅ Bootstrap first
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Then Tailwind
import "./index.css";

// ✅ Then your custom global styles (overrides everything)
import "./Styles/globalStyle.css";

import { RouterProvider } from "react-router"; // ✅ correct package
import router from "./Routes/Router.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import DataProvider from "./Context/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <AuthProvider> 
     <DataProvider>
       <RouterProvider router={router} />
     </DataProvider>
   </AuthProvider>
  </StrictMode>
);
