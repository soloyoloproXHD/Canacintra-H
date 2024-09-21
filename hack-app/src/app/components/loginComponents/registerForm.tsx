import Input from './input';
import Button from '../buttons/button';
interface RegisterFormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    name: string;
    setName: (name: string) => void;
    handleRegister: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ email, setEmail, password, setPassword, name, setName, handleRegister }) => {
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
            <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
            />
            <Button onClick={handleRegister}>Registrarse</Button>
        </div>
    );
};

export default RegisterForm;