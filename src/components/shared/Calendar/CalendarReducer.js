const CalendarReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENT':
      return action.payload;
    // case 'SET_INDEX':
    //   return action.payload.id;
    default:
      return state;
  }
};

export default CalendarReducer;
