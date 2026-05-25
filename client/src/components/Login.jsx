import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

function Login() {

  const signInWithGoogle = async () => {

    try {

      const provider =
        new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 w-full max-w-md text-center">

        <h1 className="text-4xl font-bold text-white">
          StudyAI
        </h1>

        <p className="text-zinc-400 mt-4">
          Your AI-powered productivity companion.
        </p>

        <button
          onClick={signInWithGoogle}
          className="mt-10 w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Continue with Google
        </button>

      </div>

    </div>

  );

}

export default Login;