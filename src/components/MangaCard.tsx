import { Link } from 'react-router-dom';

type MangaCardProps = {
  title: string;
  chaptersCount: number;
  to: string;
};

export function MangaCard({ title, chaptersCount, to }: MangaCardProps) {
  return (
    <div className="ml-card">
      <Link to={to} style={{ color: 'inherit', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{title}</Link>
      <div style={{ color: 'var(--ml-text-light)', fontSize: 14 }}>Глав: {chaptersCount}</div>
    </div>
  );
} 