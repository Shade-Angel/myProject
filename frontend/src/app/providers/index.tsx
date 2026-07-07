import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";

export const Providers = ({children}: { children: React.ReactNode}) => {
    return (
        <QueryProvider>
            <ThemeProvider>
                <RouterProvider>{children}</RouterProvider>            
            </ThemeProvider>           
        </QueryProvider>
    )
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;