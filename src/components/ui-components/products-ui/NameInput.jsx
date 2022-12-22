import React from "react";
import ToolTip from "/assets/icons/tool-tip.svg";

export default function NameInput() {
  return (
    <div className="mx-6 flex flex-col">
      <div className="space-x-2 flex mb-3 items-center">
        <label htmlFor="product-name">Product title</label>
        <img className="peer cursor-pointer" src={ToolTip} alt="tool tip" />
        <p className="peer-hover:opacity-100 opacity-0 text-xs font-semibold bg-gunmetal px-2 py-1 rounded-[4px] border border-gunmetal transition-all duration-100 w-2/4">
          Maximum 100 characters. No HTML or emoji allowed
        </p>
      </div>
      <input
        className="bg-black outline-none p-3 border-2 rounded-xl border-black focus:border-azure-blue"
        type="text"
        id="product-name"
      />
    </div>
  );
}
