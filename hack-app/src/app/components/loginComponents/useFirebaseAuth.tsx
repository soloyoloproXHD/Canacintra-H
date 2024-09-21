import { auth } from '../../api/firebaseconfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log('Google Auth successful:', result.user);
    } catch (error) {
        console.error('Google Auth error:', error);
    }
};