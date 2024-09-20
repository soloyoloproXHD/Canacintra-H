import { useState } from 'react';
import LoginForm from '../loginComponents/loginForm';
import RegisterForm from '../loginComponents/registerForm';
import Button from '../buttons/button';
interface AuthFormProps {
    handleGoogleSignIn: () => void;
    handleLogin: (email: string, password: string) => void;
    handleRegister: (email: string, password: string, name: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ handleGoogleSignIn, handleLogin, handleRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <div>
            <h2>Autenticación con Google</h2>
            <Button onClick={handleGoogleSignIn}>Iniciar sesión con Google</Button>

            <h2>Iniciar sesión</h2>
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={() => handleLogin(email, password)}
            />

            <h2>Registrarse</h2>
            <RegisterForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                handleRegister={() => handleRegister(email, password, name)}
            />
        </div>
    );
};

export default AuthForm;