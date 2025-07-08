import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 100 }}>
      <h1>Bienvenue chez Labonova</h1>
      <p>Envoyez vos cas facilement, nous nous occupons du reste.</p>
      <Link href="/submit">
        <button style={{ padding: 10, fontSize: 16 }}>Envoyer un cas</button>
      </Link>
    </div>
  );
}
