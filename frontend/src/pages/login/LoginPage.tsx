import { LoginForma } from "@features/auth/ui/LoginForm";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage = () => {
    return (
        <Box>
            <LoginForma />
            <Box sx={{ mt:2, textAlign: 'center'}}>
                <Typography variant="body2" color="text.secondary">
                    Нет аккаунта?{' '}
                    <Link component={RouterLink} to="/register" underline="hover">
                        Зарегистрироваться
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};