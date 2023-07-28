import { createContext } from 'react';

interface ContextProps {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const UiContext = createContext({} as ContextProps);