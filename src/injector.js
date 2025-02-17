import App from "./App";
import { createRoot } from "react-dom/client";

export const inject = (parentElementId) =>
  createRoot(document.getElementById(parentElementId)).render(<App />);
