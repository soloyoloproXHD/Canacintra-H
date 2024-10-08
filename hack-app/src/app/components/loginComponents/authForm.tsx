import { useState, useEffect, FC, FormEvent, ChangeEvent } from 'react';
import InputField from './input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; // Use the correct hook for app directory
import { signInWithEmail } from '../loginComponents/useFirebaseAuth';

interface AuthFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: FC<AuthFormProps> = ({ handleSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isMounted, setIsMounted] = useState(false); // Track if client-side rendering is done

    const router = useRouter();

    useEffect(() => {
        // Ensure this code only runs on the client side
        setIsMounted(true);
    }, []);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isMounted) {
            // Router isn't available yet
            return;
        }

        try {
            await signInWithEmail(email, password, router);
            console.log('Inicio de sesión exitoso');
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <div className='block relative'>
                <InputField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                    }
                />
                <InputField
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                />
            </div>
            <div className="flex justify-end items-center mx-6">
                <a className="text-sm text-[#5C4343] text-end underline hover:text-black" href="#">
                    Olvidaste tu contraseña?
                </a>
            </div>
            <div className='flex justify-end items-center gap-5 mr-6'>
                <button
                    type="submit"
                    className="bg-purple-400 hover:bg-purple-500 transition duration-300 w-max px-6 py-2 rounded-md text-white text-sm font-normal mt-3 flex justify-center items-center gap-2"
                >
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Iniciar sesión
                </button>
            </div>
        </form>
    );
};

export default AuthForm;