import React from "react";

export default function ProfileMenu() {

  return (
    <section className="text-sonic-silver p-4  rounded-xl absolute left-6 right-6 bottom-[90px] bg-black backdrop-blur-sm">
      <div className="p-3 space-y-4 border-b border-gunmetal">
        <button className="block profile-menu-item">Profile</button>
        <button className="pb-2 block profile-menu-item">Edit profile</button>
      </div>

      <div className="p-3 space-y-4 mt-4">
        <button className="block profile-menu-item">Account settings</button>
        <button className="pb-2 block profile-menu-item">Log out</button>
      </div>
    </section>
  );
}
