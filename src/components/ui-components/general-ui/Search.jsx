import SearchIcon from "/assets/icons/search.svg";

export default function Search() {
  return (
    <div className="flex relative">
      <button className="pl-2 absolute translate-y-[12px]">
        <img src={SearchIcon}></img>
      </button>
      <input
        type="text"
        placeholder="Search or type a command"
        className="bg-gunmetal outline-none w-80 py-3 pr-2 pl-10 rounded-xl shadow-md"
      />
    </div>
  );
}
