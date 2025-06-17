import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MangaCard } from './components/MangaCard';
import { FavoritesPage } from './components/FavoritesPage';
import { HistoryPage } from './components/HistoryPage';
import { ProfilePage } from './components/ProfilePage';
import { MangaPage } from './components/MangaPage';
import { ReaderPage } from './components/ReaderPage';
import { FavoritesProvider } from './context/FavoritesContext';
import { ThemeProvider } from './context/ThemeContext';
import { SearchProvider } from './context/SearchContext';
import { mangaList } from './mangaData';

function CatalogPage() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 32 }}>
      {mangaList.map(manga => (
        <MangaCard key={manga.id} title={manga.title} chaptersCount={manga.chapters.length} to={`/manga/${manga.id}`} />
      ))}
    </div>
  );
}

function NotFoundPage() {
  return <div style={{ padding: 32 }}>Страница не найдена</div>;
}

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <SearchProvider>
          <Router>
            <div className="ml-root">
              <Header />
              <div className="ml-layout">
                <Sidebar />
                <main className="ml-main">
                  <Routes>
                    <Route path="/" element={<CatalogPage />} />
                    <Route path="/manga/:mangaId" element={<MangaPage />} />
                    <Route path="/manga/:mangaId/read/:chapterId" element={<ReaderPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
        </SearchProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
