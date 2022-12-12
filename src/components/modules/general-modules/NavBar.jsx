import Search from "../../ui-components/general-ui/Search";
import NavLinks from "./NavLinks";
import MobileLogo from "/assets/icons/merce-single-logo.svg";

export default function NavBar() {
  return (
    <div className="fixed border-l w-full border-black nav-bar bg-soft-black md:py-6 md:px-4 lg:px-8 flex items-center justify-between">
      <div className="hidden md:flex space-x-4">
        <img className="lg:hidden" src={MobileLogo} alt="Logo" />
        <Search />
      </div>

      <NavLinks />
    </div>
  );
}
