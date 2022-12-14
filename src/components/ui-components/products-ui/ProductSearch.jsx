import SearchIcon from "/assets/icons/search.svg";

export default function ProductSearch() {
  return (
    <div className="flex relative z-10">
      <button className="pl-2 absolute translate-y-[8px]">
        <img src={SearchIcon}></img>
      </button>
      <input
        type="text"
        placeholder="Search for a product"
        className="bg-gunmetal outline-none w-80 py-2 pr-2 pl-10 rounded-xl shadow-sm"
      />
    </div>
  );
}
