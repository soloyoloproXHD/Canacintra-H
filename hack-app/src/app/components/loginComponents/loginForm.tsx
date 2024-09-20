import Input from '../loginComponents/input';
import Button from '../buttons/button';
interface LoginFormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    handleLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, setEmail, password, setPassword, handleLogin }) => {
    return (
        <div>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
            />
            <Button onClick={handleLogin}>Iniciar sesión</Button>
        </div>
    );
};

export default LoginForm;