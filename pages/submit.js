import { useState } from 'react';

export default function SubmitCase() {
  const [form, setForm] = useState({ name: '', type: '', notes: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Cas envoyé (démo)');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 50 }}>
      <h2>Envoyer un cas</h2>
      <input placeholder="Nom du patient" onChange={e => setForm({ ...form, name: e.target.value })} /><br />
      <input placeholder="Type de prothèse" onChange={e => setForm({ ...form, type: e.target.value })} /><br />
      <textarea placeholder="Notes" onChange={e => setForm({ ...form, notes: e.target.value })}></textarea><br />
      <button type="submit">Soumettre</button>
    </form>
  );
}
