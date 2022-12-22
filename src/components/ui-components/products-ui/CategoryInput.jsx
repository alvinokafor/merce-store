import React from "react";

export default function CategoryInput() {
  return (
    <div className="group border-2 rounded-xl px-2 py-2 border-sonic-silver">
      <select className="w-full bg-transparent cursor-pointer font-semibold text-sm text-sonic-silver outline-none">
        <option className="bg-soft-black" value="">
          Select Category
        </option>
        <option className="bg-soft-black" value="footwear">
          Footwear
        </option>
        <option className="bg-soft-black" value="shirts">
          Shirts
        </option>
        <option className="bg-soft-black" value="hoodies">
          Hoodies
        </option>
        <option className="bg-soft-black" value="perfumes">
          Perfumes
        </option>
      </select>
    </div>
  );
}
