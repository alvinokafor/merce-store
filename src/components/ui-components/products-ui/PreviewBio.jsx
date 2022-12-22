import React from "react";

export default function PreviewBio() {
  return (
    <div className="font-semibold flex items-center">
      <div className="w-[32px] h-[32px] mr-3">
        <img
          className="w-full h-full rounded-full object-cover"
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="profile"
        />
      </div>

      <p>
        <span className="text-sonic-silver">by</span> Alvin
      </p>
    </div>
  );
}
