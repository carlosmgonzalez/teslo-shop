import { UiState } from './UiProvider';

type UiActionType = 
  |{ type: '[UI] - ToggleMenu' }

export const UiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[UI] - ToggleMenu':
      return {
        ...state,
        isOpen: !state.isOpen
      }

    default:
      return state;
  }
};