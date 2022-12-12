import { useState } from "react";
import ProfileImg from "../../ui-components/general-ui/ProfileImg";
import ProfileMenu from "../../ui-components/general-ui/ProfileMenu";

export default function MobileProfileNav() {
  const [profileMenu, setProfileMenu] = useState(false);

  const openProfileMenu = () => {
    setProfileMenu(!profileMenu);
  };

  return (
    <section onClick={openProfileMenu} className="relative">

      {profileMenu && <ProfileMenu />}

      <div className="mt-44 mb-8 group cursor-pointer flex items-center justify-between p-4 bg-gunmetal lg:hidden mx-6 rounded-xl shadow-sm">
        <div className="flex items-center gap-x-3">
          <ProfileImg />

          <div>
            <p className="font-semibold">Alvin Okafor</p>
            <p className="text-sonic-silver text-sm">Frontend Engineer</p>
          </div>
        </div>

        {/* open profile sub menu button */}
        <button
          className={
            profileMenu
              ? "rotate-180 transition-all duration-75"
              : "transition-all duration-75"
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white"
              d="M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L6.70711 8.29289ZM12 15L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L12 15ZM18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L18.7071 9.70711ZM5.29289 9.70711L11.2929 15.7071L12.7071 14.2929L6.70711 8.29289L5.29289 9.70711ZM12.7071 15.7071L18.7071 9.70711L17.2929 8.29289L11.2929 14.2929L12.7071 15.7071Z"
              fill="#6F767E"
            />
          </svg>
        </button>
        {/* open profile sub menu button */}
      </div>
    </section>
  );
}
