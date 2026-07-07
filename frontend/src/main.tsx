import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryProvider, ThemeProvider, RouterProvider, AuthProvider } from "@app/providers";
import "./app/styles/global.css";
import { AppRouter } from "@app/routes/AppRouter";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryProvider>
            <ThemeProvider>
                <RouterProvider>
                    <AuthProvider>
                        <AppRouter />
                    </AuthProvider>
                </RouterProvider>
            </ThemeProvider>
        </QueryProvider>
    </StrictMode>
);
