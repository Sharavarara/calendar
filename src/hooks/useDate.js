import { useState } from "react";
import {
  getDaysInMonth,
  getWeeksInMonth,
  startOfMonth,
  getDay,
  getYear,
  getMonth,
  format,
  addMonths,
} from "date-fns";

const useDate = () => {
  const initialState = {
    currentDate: new Date(),
    selectedDay: null
  }

  const [date, setDate] = useState(initialState);

  return {
    date,
    dateFormatted : format(date.currentDate, 'LLLL uuuu'),
    daysOfWeekArray: ["Sun", "Mon", "Tue", "Wed", "Thi", "Fri", "Sat"],

    prevBtnHandler: ()=>{
      setDate({...date,currentDate:addMonths(date.currentDate,-1)})
    },

    nextBtnHandler: ()=>{
      setDate({...date,currentDate:addMonths(date.currentDate,1)})
    },

    dayClickHandler: ({target:{textContent}})=>{
      setDate({...date,selectedDay:textContent})
    },

    getMonthData: () => {
      const result = [];
      let day = 1;

      for (let i = 0; i < getWeeksInMonth(date.currentDate); i++) {
        result[i] = [];
        for (let j = 0; j < 7; j++) {
          if (
            (!i && j < getDay(startOfMonth(date.currentDate))) ||
            day > getDaysInMonth(date.currentDate)
          ) {
            result[i][j] = null;
          } else {
            result[i][j] = format(
              new Date(
                getYear(date.currentDate),
                getMonth(date.currentDate),
                day++
              ),
              "d"
            );
          }
        }
      }
      return result;
    },
  };
};

export default useDate;

// export const getMonthData = (year, month) => {
//   const result = [];
//   const date = new Date(year, month);
//   let day = 1;

//   for (let i = 0; i < getWeeksInMonth(date); i++) {
//     result[i] = [];

//     for (let j = 0; j < 7; j++) {
//       if ((i === 0 && j < getDay(startOfMonth(date)) || day > getDaysInMonth(date))) {
//         result[i][j] = null;
//       } else {
//         result[i][j] = new Date(year, month, day++)
//       };
//     };
//   };

//   return result;
// };
