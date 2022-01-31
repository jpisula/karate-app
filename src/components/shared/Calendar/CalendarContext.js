import { createContext, useReducer } from 'react';
import CalendarReducer from './CalendarReducer';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const initialState = {
    event: {},
    chosenMonth: 0,
    chosenYear: 2022,
    louderForOthers: false,
    startDay: 6,
    isYearSwitcherOpen: false,
    isMonthSwitcherOpen: false,
    prevChosenYear: 2022,
    prevChosenMonth: 0,
    calendarTitle: `STYCZEŃ 2022`,
    daysToMove: 0
  };

  const [state, dispatch] = useReducer(CalendarReducer, initialState);

  return (
    <CalendarContext.Provider
      value={{
        event: state.event,
        chosenYear: state.chosenYear,
        chosenMonth: state.chosenMonth,
        louderForOthers: state.louderForOthers,
        startDay: state.startDay,
        isYearSwitcherOpen: state.isYearSwitcherOpen,
        isMonthSwitcherOpen: state.isMonthSwitcherOpen,
        prevChosenYear: state.prevChosenYear,
        prevChosenMonth: state.prevChosenMonth,
        calendarTitle: state.calendarTitle,
        daysToMove: state.daysToMove,
        dispatch
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
