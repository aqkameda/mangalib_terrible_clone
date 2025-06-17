import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { mangaList } from '../mangaData';

export function ReaderPage() {
  const { mangaId, chapterId } = useParams();
  const [page, setPage] = useState(0);
  const manga = mangaList.find(m => m.id === mangaId);
  if (!manga) return <div>Манга не найдена</div>;
  const chapter = manga.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return <div>Глава не найдена</div>;
  const total = chapter.pages.length;
  return (
    <div className="ml-card" style={{ maxWidth: 900, margin: '0 auto', borderRadius: 16, boxShadow: 'var(--ml-shadow)', padding: 32, textAlign: 'center' }}>
      <div style={{ marginBottom: 20, textAlign: 'left' }}>
        <Link to={`/manga/${manga.id}`}>&larr; Назад к манге</Link>
      </div>
      <h2 style={{ fontSize: 26, margin: '0 0 18px', fontWeight: 700 }}>{manga.title} — {chapter.title}</h2>
      <div style={{ margin: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>←</button>
        <span style={{ fontSize: 18 }}>{page + 1} / {total}</span>
        <button onClick={() => setPage(p => Math.min(total - 1, p + 1))} disabled={page === total - 1}>→</button>
      </div>
      <div className="ml-page-placeholder" style={{ display: 'inline-block', minHeight: 400, minWidth: 300, marginTop: 24 }}>
        {chapter.pages[page] ? <img src={chapter.pages[page]} alt={chapter.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div>[Нет изображения]</div>}
      </div>
    </div>
  );
} 