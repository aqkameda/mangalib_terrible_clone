import { useParams, Link } from 'react-router-dom';
import { mangaList } from '../mangaData';
import { useFavorites } from '../context/FavoritesContext';

export function MangaPage() {
  const { mangaId } = useParams();
  const manga = mangaList.find(m => m.id === mangaId);
  const { favorites, toggleFavorite } = useFavorites();
  if (!manga) return <div>Манга не найдена</div>;
  const isFav = favorites.includes(manga.id);
  return (
    <div className="ml-card" style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, boxShadow: 'var(--ml-shadow)', padding: 32 }}>
      <h2 style={{ fontSize: 32, margin: '0 0 18px', fontWeight: 700 }}>{manga.title}</h2>
      <button onClick={() => toggleFavorite(manga.id)} style={{ marginBottom: 18, background: isFav ? 'var(--ml-card)' : 'var(--ml-accent)', color: isFav ? 'var(--ml-accent)' : '#fff', border: isFav ? '1px solid var(--ml-accent)' : 'none' }}>
        {isFav ? 'Убрать из избранного' : 'В избранное'}
      </button>
      <div style={{ margin: '24px 0 12px', fontWeight: 500, fontSize: 18 }}>Главы</div>
      <ul className="ml-list">
        {manga.chapters.map(ch => (
          <li key={ch.id}>
            <Link to={`/manga/${manga.id}/read/${ch.id}`}>{ch.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 