import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type SearchContextType = {
  query: string;
  setQuery: (q: string) => void;
  show: boolean;
  setShow: (s: boolean) => void;
};

const SearchContext = createContext<SearchContextType>({
  query: '',
  setQuery: () => {},
  show: false,
  setShow: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  return (
    <SearchContext.Provider value={{ query, setQuery, show, setShow }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
} 