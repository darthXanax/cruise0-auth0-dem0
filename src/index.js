import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

// Replace these with YOUR Auth0 values
const domain = "dev-um8dx3526rjoh8ov.us.auth0.com";
const clientId = "oeP2KkClxldR2weH59NsckiZPYiCTR9G";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
