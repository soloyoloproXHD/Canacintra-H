import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { signInWithGoogle } from '../loginComponents/useFirebaseAuth';
import { useRouter } from 'next/navigation'; // Use the correct hook for navigation

const AuthProviders: FC = () => {
    const router = useRouter(); // Get the router here

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle(router); // Pass the router to the function
        } catch (error) {
            console.error('Error during Google sign-in:', error);
        }
    };

    return (
        <div className="flex justify-around font-semibold text-white items-center w-full gap-2 transition duration-300 mt-3">
            <div className="w-[1/2]">
                <button
                    className="flex justify-center hover:font-bold items-center rounded-xl px-5 py-3 bg-red-500 hover:bg-red-600 transition duration-300 gap-2"
                    onClick={handleGoogleSignIn} // Correct the onClick handler
                >
                    <FontAwesomeIcon icon={faGoogle} /> Google
                </button>
            </div>
            <div>
                <button className="hover:font-bold hover:text-gray-300 transition duration-300 bg-blue-500 px-5 py-3 rounded-xl">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                </button>
            </div>
        </div>
    );
};

export default AuthProviders;
