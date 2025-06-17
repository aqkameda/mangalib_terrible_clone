export type Manga = {
  id: string;
  title: string;
  cover: string;
  genres: string[];
  chapters: Chapter[];
};

export type Chapter = {
  id: string;
  title: string;
  pages: string[]; // ссылки на картинки
};

export const mangaList: Manga[] = [
  {
    id: '1',
    title: 'Berserk',
    cover: '',
    genres: ['Экшен', 'Драма', 'Фэнтези'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
      {
        id: '2',
        title: 'Глава 2',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '2',
    title: 'One Piece',
    cover: '',
    genres: ['Приключения', 'Экшен', 'Комедия'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '3',
    title: 'Naruto',
    cover: '',
    genres: ['Экшен', 'Приключения', 'Сёнэн'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
      {
        id: '2',
        title: 'Глава 2',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '4',
    title: 'Death Note',
    cover: '',
    genres: ['Детектив', 'Психология', 'Сверхъестественное'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '5',
    title: 'Chainsaw Man',
    cover: '',
    genres: ['Экшен', 'Драма', 'Сверхъестественное'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '6',
    title: 'Bleach',
    cover: '',
    genres: ['Экшен', 'Сёнэн', 'Сверхъестественное'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
      {
        id: '2',
        title: 'Глава 2',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '7',
    title: 'Attack on Titan',
    cover: '',
    genres: ['Экшен', 'Драма', 'Трагедия'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
    ],
  },
  {
    id: '8',
    title: 'Jujutsu Kaisen',
    cover: '',
    genres: ['Экшен', 'Сёнэн', 'Сверхъестественное'],
    chapters: [
      {
        id: '1',
        title: 'Глава 1',
        pages: ['', ''],
      },
    ],
  },
]; 