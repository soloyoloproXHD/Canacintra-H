// pages/auth.js
import AuthForm from '../components/organisms/AuthForm';
import { auth } from '../lib/firebase';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthC = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google sign-in success:', result.user);
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully:', userCredential.user);
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    const handleRegister = async (email, password, name) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered successfully:', userCredential.user);
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
