import React from "react";

export default function CustomersMobileItem({name, username, img, lifetime}) {
  return (
    <>
      <section className="font-semibold flex justify-between border-b border-gunmetal pb-4">
        <div className="flex items-center gap-x-2">
          <div className="w-12 h-12">
            <img
              src={img}
              alt="Profile Image"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <aside className="space-y-2">
            <p>{name}</p>
            <p className="text-sm text-sonic-silver">{username}</p>
          </aside>
        </div>

        <p>{lifetime}</p>
      </section>
    </>
  );
}
