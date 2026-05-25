import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKPwD1NE9tK1pyLgNPNx_kbDxgRjuBqmw",
  authDomain: "synapse-ai-study-companion.firebaseapp.com",
  projectId: "synapse-ai-study-companion",
  storageBucket: "synapse-ai-study-companion.firebasestorage.app",
  messagingSenderId: "533025384226",
  appId: "1:533025384226:web:82b9521419e072f46de77b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);