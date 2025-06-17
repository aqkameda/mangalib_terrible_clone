import { mangaList } from '../mangaData';
import { MangaCard } from './MangaCard';

export function HistoryPage() {
  // Мок: история — первые 3 манги
  const history = mangaList.slice(0, 3);
  return (
    <div>
      <h2 style={{ fontSize: 28, margin: '0 0 18px', fontWeight: 700 }}>История</h2>
      {history.length === 0 ? (
        <div style={{ color: 'var(--ml-text-light)', fontSize: 20, marginTop: 32 }}>История пуста</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 32 }}>
          {history.map(manga => (
            <MangaCard key={manga.id} title={manga.title} chaptersCount={manga.chapters.length} to={`/manga/${manga.id}`} />
          ))}
        </div>
      )}
    </div>
  );
} 