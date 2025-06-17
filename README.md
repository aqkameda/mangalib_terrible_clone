# MangaLib Lite (React)

Минималистичный клон mangalib на React + TypeScript + Vite.

## Возможности

- Каталог манги (моки)
- Страница манги, главы, ридер
- Поиск по названию (в хедере)
- Избранное (локально, через context)
- История (мок)
- Профиль (мок)
- Тёмная/светлая тема
- Современный UI, адаптив

## Структура

```
src/
  components/
    FavoritesPage.tsx
    Header.tsx
    HistoryPage.tsx
    MangaCard.tsx
    MangaPage.tsx
    ProfilePage.tsx
    ReaderPage.tsx
    Sidebar.tsx
  context/
    FavoritesContext.tsx
    SearchContext.tsx
    ThemeContext.tsx
  App.tsx
  index.css
  mangaData.ts
  main.tsx
```

## Запуск

```bash
npm install
npm run dev
```
