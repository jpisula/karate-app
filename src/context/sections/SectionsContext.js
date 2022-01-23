import { createContext, useReducer } from 'react';
import SectionsReducer from './SectionsReducer';

const SectionsContext = createContext();

export const SectionsProvider = ({ children }) => {
  const initialState = { id: 'LIGOTA', title: 'Katowice Ligota' };

  const [state, dispatch] = useReducer(SectionsReducer, initialState);
  return (
    <SectionsContext.Provider
      value={{
        sectionToDisplay: state,
        dispatch
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

export default SectionsContext;
