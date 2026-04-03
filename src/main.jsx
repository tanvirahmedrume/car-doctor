import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
<div className="">
    <React.StrictMode>
      <AuthProvider>
            <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
</div>
);