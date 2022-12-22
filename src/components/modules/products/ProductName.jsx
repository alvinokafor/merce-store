import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import NameInput from "../../ui-components/products-ui/NameInput";

export default function ProductName() {
  return (
    <section className=" bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center mb-8">
        <SectionTitle titleText="Name" titleColor="bg-lavender-blue" />
        <Link to='/'><button className="group hover:bg-white flex gap-2 px-4 py-2 border-2 border-gunmetal rounded-lg transition-all duration-150">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 17.7929C11.0975 18.1834 11.0975 18.8166 10.707 19.2071C10.3164 19.5976 9.68327 19.5976 9.29274 19.2071L3.49985 13.4142C2.7188 12.6332 2.7188 11.3668 3.49985 10.5858L9.29274 4.79289C9.68327 4.40237 10.3164 4.40237 10.707 4.79289C11.0975 5.18342 11.0975 5.81658 10.707 6.20711L5.91406 11H19.9998C20.5521 11 20.9998 11.4477 20.9998 12C20.9998 12.5523 20.5521 13 19.9998 13H5.91406L10.707 17.7929Z"
              fill="#6F767E"
              className="group-hover:fill-soft-black transition-all duration-150"
            />
          </svg>
          <span className="text-sonic-silver group-hover:text-soft-black transition-all duration-150 font-semibold">Back</span>
        </button></Link>
      </div>

      <NameInput />
    </section>
  );
}
