import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RouteComponent({ children, isProtected}){
    const isTokenValid = useSelector(state => state.isTokenValid.value);
    return isProtected ? (isTokenValid ? children : <Navigate to="/login"/> ) : (isTokenValid ? <Navigate to="/dashboard" /> : children);
}