import { createContext, useReducer } from 'react';
import CalendarReducer from './CalendarReducer';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const initialState = { event: undefined };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  return (
    <CalendarContext.Provider value={{ event: state, dispatch }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
