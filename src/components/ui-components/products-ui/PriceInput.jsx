import React from "react";

export default function PriceInput() {
  return (
    <>
      <div className="mx-6 flex flex-col">
        <label className="mb-3" htmlFor="price">
          Amount
        </label>

        <input
          className="bg-black outline-none w-full p-3 border-2 rounded-xl border-black focus:border-azure-blue"
          type="text"
          id="price"
        />
      </div>
    </>
  );
}
