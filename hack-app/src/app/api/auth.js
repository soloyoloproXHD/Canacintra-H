// pages/auth.js
import AuthForm from '../components/organisms/AuthForm';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, getRedirectResult } from 'firebase/auth';

const AuthC = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        const router = useRouter(); // Inicia useRouter

        try {
            const result = await signInWithPopup(auth, provider);

            // Opción 1: Si el inicio de sesión fue exitoso, redirige al home
            router.push('/home');

        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };

    const handleLogin = async (email, password) => {
        const router = useRouter(); // Inicia useRouter

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully:', userCredential.user);

            // Redirige al home después de iniciar sesión exitosamente
            router.push('/home');

        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    const handleRegister = async (email, password, name) => {
        const router = useRouter(); // Inicia useRouter

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered successfully:', userCredential.user);

            // Redirige al home después de registrarse exitosamente
            router.push('/home');

        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };

    return (
        <AuthForm
            handleGoogleSignIn={handleGoogleSignIn}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
        />
    );
};

export default AuthC;
