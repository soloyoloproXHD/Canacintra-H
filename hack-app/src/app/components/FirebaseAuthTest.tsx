import AuthForm from '../components/loginComponents/authForm';
import { auth } from '../api/firebaseconfig';
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const FirebaseAuthTest: React.FC = () => {
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google sign-in success:', result.user);
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully:', userCredential.user);
        } catch (error) {
            console.error('Error logging in:', (error as any).message);
        }
    };

    const handleRegister = async (email: string, password: string, name: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered successfully:', userCredential.user);
        } catch (error) {
            console.error('Error registering user:', (error as any).message);
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

export default FirebaseAuthTest;
