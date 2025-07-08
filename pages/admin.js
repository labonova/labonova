import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const handleLogin = () => {
    if (password === 'labonova123') setAuthorized(true);
    else alert('Mot de passe incorrect');
  };

  return (
    <div style={{ padding: 50 }}>
      {!authorized ? (
        <>
          <h2>Connexion admin</h2>
          <input type="password" onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Entrer</button>
        </>
      ) : (
        <>
          <h2>Interface admin (démo)</h2>
          <p>Swipe gauche = refuser / droite = accepter</p>
          <div style={{ border: '1px solid black', padding: 20 }}>Cas 1 : Couronne - Jean Dupont</div>
        </>
      )}
    </div>
  );
}
