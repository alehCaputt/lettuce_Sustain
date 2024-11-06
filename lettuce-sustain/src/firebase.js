// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Para autenticação
import { getFirestore } from 'firebase/firestore';  // Para Firestore

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAis7UfAcb51_oIkW9Qc9ux3wEAVhPhtKA",
  authDomain: "lettuce-sustain-8397a.firebaseapp.com",
  projectId: "lettuce-sustain-8397a",
  storageBucket: "lettuce-sustain-8397a.firebasestorage.app",
  messagingSenderId: "37187315492",
  appId: "1:37187315492:web:af58c55ba7918ee0d9b5b1",
  measurementId: "G-L8RT9WGDE9"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o auth e o Firestore (db)
const auth = getAuth(app);
const db = getFirestore(app); // Inicializa o Firestore
export { auth, db };  // Exporta ambos
