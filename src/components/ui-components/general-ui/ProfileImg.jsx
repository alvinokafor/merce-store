import React from "react";

export default function ProfileImg() {
  return (
    <section className="cursor-pointer relative group">
      <div className="w-12 h-12 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Profile Image"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <section className="hidden lg:block scale-0 group-hover:scale-100 transition-all duration-100 text-sonic-silver mt-2 p-2 w-[280px] rounded-xl absolute -right-4 group-hover:shadow-xl  bg-black lg:backdrop-blur-sm">
        <div className="p-3 space-y-4 border-b border-gunmetal">
          <button className="block profile-menu-item">Profile</button>
          <button className="pb-2 block profile-menu-item">Edit profile</button>
        </div>

        <div className="p-3 space-y-4 mt-4">
          <button className="block profile-menu-item">Account settings</button>
          <button className="pb-2 block profile-menu-item">Log out</button>
        </div>
      </section>
    </section>
  );
}
