import type { ReactNode } from "react";
import { AuthContext } from "./context/AuthContext";
import { useCheckAuth } from "./hooks/useCheckAuth";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { isAuthenticated, login, logout } = useCheckAuth();

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
