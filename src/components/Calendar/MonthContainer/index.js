import React from "react";
import useDate from "./../../../hooks/useDate.js";

export default function MonthContainer() {
  const {
    date,
    daysOfWeekArray,
    dateFormatted,
    getMonthData,
    prevBtnHandler,
    nextBtnHandler,
    dayClickHandler,
  } = useDate();


  return (
    <div>
      <h1>{date.selectedDay}</h1>
      <header>
        <button onClick={prevBtnHandler}>{"<"}</button>
        <h1>{dateFormatted}</h1>
        <button onClick={nextBtnHandler}>{">"}</button>
      </header>
      <table>
        <thead>
          <tr>
            {daysOfWeekArray.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {getMonthData().map((week, index) => (
            <tr key={index}>
              {week.map((date, index) =>
                date ? (<td key={index} onClick={(e) => dayClickHandler(e)}>{date}</td>) : (<td key={index} />)
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
