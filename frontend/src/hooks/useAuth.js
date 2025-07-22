import { useSelector } from 'react-redux';
import { selectUser, selectIsAuthenticated } from '../features/auth/authSlice';

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return { user, isAuthenticated };
};