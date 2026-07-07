import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "@app/providers";
import "./app/styles/global.css";
import { AppRouter } from "@app/routes/AppRouter";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Providers>
            <AppRouter />
        </Providers>
    </StrictMode>
);
