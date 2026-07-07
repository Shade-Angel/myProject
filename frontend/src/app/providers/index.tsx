import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { ThemeProvider } from "./ThemeProvider";
import { AuthProvider } from "./auth"

export const Providers = ({children}: { children: React.ReactNode}) => {
    return (
        <QueryProvider>
            <ThemeProvider>
                <RouterProvider>
                    <AuthProvider>{children}</AuthProvider>                   
                </RouterProvider>            
            </ThemeProvider>           
        </QueryProvider>
    )
}
