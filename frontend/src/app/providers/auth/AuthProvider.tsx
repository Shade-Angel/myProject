import type { ReactNode } from "react";
import { AuthContext } from "../../../features/auth/types/AuthContext";
import { useCheckAuth } from "../../../features/auth/hooks/useCheckAuth";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const { isAuthenticated, login, logout } = useCheckAuth();

    return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
