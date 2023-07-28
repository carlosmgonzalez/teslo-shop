import { FC, PropsWithChildren, useReducer, useState } from 'react';
import { UiContext } from './UiContext';
import { UiReducer } from './uiReducer';

export interface UiState {
  isOpen: boolean
};

const UI_INITIAL_STATE: UiState  = {
  isOpen: false
};

export const UiProvider: FC<PropsWithChildren> = ({children}) => {

  const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE);

  const setIsOpen = () => {
    dispatch({ type: "[UI] - ToggleMenu" });
  };

  return (
    <UiContext.Provider 
    value={{...state, setIsOpen}} 
    >
      {children}
    </UiContext.Provider>
  );
};