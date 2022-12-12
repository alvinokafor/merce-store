import React from "react";

export default function Filter() {
  return (
    <div className="group border-2 rounded-xl px-2 py-2 border-sonic-silver hover:border-white">
      <select
        className="bg-transparent group-hover:text-white cursor-pointer font-semibold text-sm text-sonic-silver outline-none transition-all duration-100"
        name="filter"
        id="chart filter"
      >
        <option className="bg-soft-black" value="">
          All time
        </option>
        <option className="bg-soft-black" value="monthly">
          Monthly
        </option>
        <option className="bg-soft-black" value="weekly">
          Weekly
        </option>
        <option className="bg-soft-black" value="daily">
          Daily
        </option>
      </select>
    </div>
  );
}
