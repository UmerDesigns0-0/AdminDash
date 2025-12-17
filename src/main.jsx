import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2/base";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
// import "./styles/tailwind-dark-lite.css";

import { ContextProvider } from "./contexts/StateContext.jsx";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1JGaF5cXGpCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWH1fd3RSR2ReU0N1W0JWYEs="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
