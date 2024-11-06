// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { auth, db } from '../firebase';  // Agora estamos importando o db também
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';  // Para salvar no Firestore

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      // Criação do usuário no Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salvar o nome e email no Firestore com o UID do usuário como ID do documento
      await setDoc(doc(db, 'users', user.uid), {  // Aqui estamos criando o documento na coleção 'users' com o UID do usuário
        name: name,
        email: email,
      });

      console.log('Usuário registrado:', user);
      // Aqui você pode redirecionar ou limpar os campos após o sucesso.
    } catch (error) {
      setError(error.message);  // Exibe erro caso aconteça
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};

export default RegisterScreen;
