import React from "react";
import DateContainer from "./DateContainer";
import MonthContainer from "./MonthContainer";
import {CalendarContext} from './../../context';
import useDate from "../../hooks/useDate";

export default function Calendar() {
  const {date:{selectedDay}} = useDate();
  return (
    <div>
      <CalendarContext.Provider value={selectedDay}>
        <DateContainer />
        <MonthContainer />
      </CalendarContext.Provider>
    </div>
  );
}
