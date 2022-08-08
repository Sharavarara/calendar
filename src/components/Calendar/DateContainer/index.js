import React, { useContext } from "react";
import { CalendarContext } from "../../../context";

export default function DateContainer() {
  const value = useContext(CalendarContext)
  console.log(value)

  return <div>{value}</div>;
}
