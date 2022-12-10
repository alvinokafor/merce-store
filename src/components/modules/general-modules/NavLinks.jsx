import { useState } from "react";
import ProfileImg from "../../ui-components/general-ui/ProfileImg";
import MobileProfileNav from "./MobileProfileNav";
import SidebarContent from "../../ui-components/general-ui/SidebarContent";

import Plus from "/assets/icons/plus.svg";
import Comment from "/assets/icons/comments-outline.svg";
import Notification from "/assets/icons/notifications-outline.svg";
import MobileMenu from "/assets/icons/mobile-menu.svg";
import SearchIcon from "/assets/icons/search.svg";
import Cancel from "/assets/icons/cancel.svg";
import Logo from "/assets/icons/merce-single-logo.svg";

export default function NavLinks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  const openMenuHandler = () => {
    setMobileMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setMobileMenuOpen(false);
  };


  return (
    <>
      {/* Desktop and tablet nav links */}
      <div className="hidden md:flex items-center space-x-9">
        <button className="lg:flex items-center bg-azure-blue px-5 py-3 rounded-xl hidden">
          <img className="mr-2" src={Plus} />
          Create
        </button>
        <button>
          <img src={Comment} alt="Message" />
        </button>
        <button>
          <img src={Notification} alt="Notification" />
        </button>
        <ProfileImg />
        <button onClick={openMenuHandler} className="lg:hidden">
          <img src={MobileMenu} alt="Menu" />
        </button>
      </div>

      {/* Mobile NavBar */}
      <div className="flex w-full justify-between mx-auto py-9 px-6 md:hidden">
        <button>
          <img src={SearchIcon} alt="Search" />
        </button>
        <button>
          <img src={Comment} alt="Message" />
        </button>
        <button>
          <img src={Notification} alt="Notification" />
        </button>
        <button onClick={openMenuHandler}>
          <img src={MobileMenu} alt="Menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <section className=" md:pb-8 lg:hidden absolute top-0 left-0 right-0 bg-soft-black">
          <div className="flex justify-between items-center p-6 border-b-2 border-black">
            <button>
              <img src={Logo} alt="Logo" />
            </button>

            <button onClick={closeMenuHandler}>
              <img src={Cancel} alt="Cancel" />
            </button>
          </div>

          <SidebarContent setMobileMenuOpen={setMobileMenuOpen}/>

          <MobileProfileNav />
        </section>
      )}
    </>
  );
}
