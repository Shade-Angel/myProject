import { useState } from "react";

export const useCheckAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!localStorage.getItem('token');
    });


    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }

    return { isAuthenticated, login, logout };
}