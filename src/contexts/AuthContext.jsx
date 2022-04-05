import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import * as localStorageService from '../services/localStorage';
import { signInWithPopup, FacebookAuthProvider, signOut } from 'firebase/auth';
import { createUser, defaultLogin, loginFacebook } from '../apis/auth';
import { authenication } from '../config/firebase-config';
import { ErrContext } from './ErrContext';
const AuthContext = createContext();

function AuthContextProvider(props) {
    const { setError } = useContext(ErrContext);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState(localStorageService.getRole());
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorageService.getToken('token');
        if (token) {
            setUser(jwtDecode(token));
        }
    }, []);

    const facebookLogin = async (e) => {
        try {
            e.preventDefault();
            const provider = new FacebookAuthProvider();
            const response = await signInWithPopup(authenication, provider);
            const res = await loginFacebook(response);
            login(res.data.token);
        } catch (err) {
            console.log(err.message);
        }
    };

    const handleSubmitLogin = async (e) => {
        try {
            e.preventDefault();
            const res = await defaultLogin(email, password);
            login(res.data.token);
        } catch (err) {
            setError(err.response.data.message);
            console.log(err.response.data.message);
            setTimeout(() => setError(''), 3000);
        }
    };
    const login = async (token) => {
        try {
            await localStorageService.setToken(token);
            setUser(jwtDecode(token));
            setRole(jwtDecode(token).role);
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await createUser(
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            );

            navigate('/login');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            setError(err.response.data.message);
            console.log(err.response.data.message);
            setTimeout(() => setError(''), 3000);
        }
    };

    const handleSubmitLogout = async () => {
        try {
            await signOut(authenication);
            logout();
        } catch (err) {
            console.log(err.message);
        }
    };

    const logout = () => {
        localStorageService.removeToken();
        setUser(null);
        setRole('guest');
        navigate('/');
        console.log('sign out successful');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                handleSubmitLogin,
                facebookLogin,
                handleSubmitRegister,
                handleSubmitLogout,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                confirmPassword,
                setConfirmPassword,
                role,
                setRole,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;
export { AuthContext };
