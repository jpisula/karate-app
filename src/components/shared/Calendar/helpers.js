export const isYearCommon = (y) => {
  if (y % 4 === 0 && y % 100 !== 0) {
    return true;
  }
  return false;
};

export const countDays = (
  month1,
  year1,
  month2,
  year2,
  months,
  nrOfAllDays
) => {
  let days = 0;

  if (year1 === year2) {
    for (let i = month1; i < month2; i++) {
      days += months[i].nrOfDays;
    }
    return days;
  } else if (year1 < year2) {
    if (isYearCommon(year1) && month1 < 2) {
      days++;
    }

    for (let i = month1; i < 12; i++) {
      days += months[i].nrOfDays;
    }
    for (let i = 0; i < month2; i++) {
      days += months[i].nrOfDays;
    }

    for (let i = year1 + 1; i < year2; i++) {
      if (isYearCommon(i)) {
        days += nrOfAllDays + 1;
      } else {
        days += nrOfAllDays;
      }
    }
  } else {
    if (isYearCommon(year1)) {
      days++;
    }
    if (isYearCommon(year2)) {
      days++;
    }
  }
  return days;
};
