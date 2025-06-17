export function ProfilePage() {
  const user = { name: 'Гость', email: 'guest@example.com' };
  return (
    <div className="ml-card" style={{ maxWidth: 400, margin: '0 auto', borderRadius: 16, boxShadow: 'var(--ml-shadow)', padding: 32, textAlign: 'center' }}>
      <div className="ml-avatar" style={{ fontSize: 48, margin: '0 auto 16px' }}>👤</div>
      <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 8 }}>{user.name}</div>
      <div style={{ color: 'var(--ml-text-light)', marginBottom: 24 }}>{user.email}</div>
      <button style={{ width: '100%' }}>Выйти</button>
    </div>
  );
} 