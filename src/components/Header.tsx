import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useSearch } from '../context/SearchContext';
import { mangaList } from '../mangaData';
import { useRef, useEffect } from 'react';

export function Header() {
  const { dark, toggleTheme } = useTheme();
  const { query, setQuery, show, setShow } = useSearch();
  const results = query.trim()
    ? mangaList.filter(m => m.title.toLowerCase().includes(query.trim().toLowerCase()))
    : [];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    }
    if (show) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [show]);

  return (
    <header className="ml-header" style={{ position: 'relative' }}>
      <Link to="/" className="ml-logo">MangaLib</Link>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <input
          className="ml-search-input"
          type="text"
          placeholder="Поиск..."
          value={query}
          onChange={e => { setQuery(e.target.value); setShow(true); }}
          onFocus={() => setShow(true)}
          autoComplete="off"
        />
        {show && query && (
          <div ref={dropdownRef} style={{
            position: 'absolute',
            top: 44,
            left: 0,
            width: '100%',
            background: '#fff',
            border: '1px solid var(--ml-border)',
            borderRadius: 10,
            boxShadow: '0 4px 16px 0 rgba(60,72,88,.10)',
            zIndex: 100,
            maxHeight: 320,
            overflowY: 'auto',
          }}>
            {results.length === 0 && <div style={{ padding: 16, color: 'var(--ml-text-light)' }}>Ничего не найдено</div>}
            {results.map(manga => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                style={{ display: 'block', padding: '12px 18px', color: 'var(--ml-text)', textDecoration: 'none', fontWeight: 500, borderBottom: '1px solid #f0f1f4' }}
                onClick={() => { setShow(false); setQuery(''); }}
              >
                {manga.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <button onClick={toggleTheme} style={{ background: 'none', color: 'var(--ml-text)', fontSize: 22, marginRight: 16, boxShadow: 'none', padding: 0, border: 'none', cursor: 'pointer' }}>
        {dark ? '☀️' : '🌙'}
      </button>
      <Link to="/profile" className="ml-profile">
        <span className="ml-avatar">👤</span>
        <span className="ml-username">Гость</span>
      </Link>
    </header>
  );
} 