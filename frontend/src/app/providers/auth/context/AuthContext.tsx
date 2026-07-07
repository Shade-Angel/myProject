import { createContext } from "react";
import type { IAuthType } from "../types/auth-provider.interface";

export const AuthContext = createContext<IAuthType | null>(null);