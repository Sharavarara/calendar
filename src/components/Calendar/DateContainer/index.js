import React from "react";
import useDate from "../../../hooks/useDate";


export default function DateContainer() {
  const {date} = useDate();

  return <div>{date.selectedDay}</div>;
}