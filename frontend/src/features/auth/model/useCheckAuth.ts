import { useEffect, useState } from "react";
import { storage } from '@shared';

export const useCheckAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return !!storage.getToken();
    });


    const login = (token: string) => {
        storage.setToken(token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        storage.removeToken();
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const handleClobalLogout = () => {
            logout();
        };

        window.addEventListener('auth:logout', handleClobalLogout);

        return () => {
            window.removeEventListener('auth:logout', handleClobalLogout);
        };
    });

    return { isAuthenticated, login, logout };
};