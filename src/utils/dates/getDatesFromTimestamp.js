import { DateTime } from "luxon";

export const getDatesFromTimestamp = (dates) => {
  return dates.map((date) => {
    return {
      date: DateTime.fromMillis(Math.trunc(date.timestamp)).toFormat(
        "MM-dd-yyyy"
      ),
      hour: DateTime.fromMillis(Math.trunc(date.timestamp)).toLocaleString(
        DateTime.TIME_SIMPLE
      ),
      value: date.value,
    };
  });
};
