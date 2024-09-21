import { auth } from '../../api/firebaseconfig';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // Use the correct hook for app directory
import { signOut } from 'firebase/auth';

// Inicio de sesión con Google
export const signInWithGoogle = async (router: useRouter) => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log('Google Auth successful:', result.user);
        router.push('/home'); // Redirecciona después de iniciar sesión
    } catch (error) {

        console.error('Google Auth error:', error);
    }
};

// Inicio de sesión con correo y contraseña
export const signInWithEmail = async (email: string, password: string, router: useRouter) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Email Auth successful:', userCredential.user);
        router.push('/home'); // Redirecciona después de iniciar sesión
    } catch (error) {
        if (error instanceof Error) {
            console.error('Email Auth error:', error.message);
        } else {
            console.error('Email Auth error:', error);
        }
    }
};

export const logout = async (router: useRouter) => {
    try {
        await signOut(auth);
        console.log('Logout successful');
        router.push('/'); // Redirigir a la página de inicio de sesión después del logout
    } catch (error) {
        console.error('Logout error:', error);
    }
};