import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({ favorites: [], toggleFavorite: () => {} });

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const toggleFavorite = (id: string) => {
    setFavorites(favs => favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id]);
  };
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
} 