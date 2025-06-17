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

## Как расширять

- Добавляй новые страницы в `src/components/`
- Добавляй новые контексты в `src/context/`
- Для новых роутов — просто добавь `<Route ... />` в `App.tsx`
- Для новых моков — редактируй `mangaData.ts`

## Пример использования компонента

```tsx
<MangaCard title="Berserk" chaptersCount={2} to="/manga/1" />
```

## Авторизация, загрузка с API, комменты и т.д. не реализованы (только фронт, только моки)

---

Если нужны доп. инструкции — см. код, всё максимально просто и модульно.
