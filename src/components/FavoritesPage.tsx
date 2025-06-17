import { useFavorites } from '../context/FavoritesContext';
import { mangaList } from '../mangaData';
import { MangaCard } from './MangaCard';

export function FavoritesPage() {
  const { favorites } = useFavorites();
  const favManga = mangaList.filter(m => favorites.includes(m.id));
  return (
    <div>
      <h2 style={{ fontSize: 28, margin: '0 0 18px', fontWeight: 700 }}>Избранное</h2>
      {favManga.length === 0 ? (
        <div style={{ color: 'var(--ml-text-light)', fontSize: 20, marginTop: 32 }}>Нет избранного</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 32 }}>
          {favManga.map(manga => (
            <MangaCard key={manga.id} title={manga.title} chaptersCount={manga.chapters.length} to={`/manga/${manga.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}