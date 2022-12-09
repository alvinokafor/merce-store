import { useState } from "react";
import ProfileImg from "../../ui-components/general-ui/ProfileImg";
import MobileProfileNav from "./MobileProfileNav";

import Plus from "/assets/icons/plus.svg";
import Comment from "/assets/icons/comments-outline.svg";
import Notification from "/assets/icons/notifications-outline.svg";
import MobileMenu from "/assets/icons/mobile-menu.svg";
import SearchIcon from "/assets/icons/search.svg";
import Cancel from "/assets/icons/cancel.svg";
import Logo from "/assets/icons/merce-single-logo.svg";

export default function NavLinks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productSubMenu, setProductSubMenu] = useState(false);
  const [customerSubMenu, setCustomerSubMenu] = useState(false);
  const [incomeSubMenu, setIncomeSubMenu] = useState(false);

  const openMenuHandler = () => {
    setMobileMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setMobileMenuOpen(false);
  };

  const openProducts = () => {
    setProductSubMenu(!productSubMenu);
  };

  const openCustomer = () => {
    setCustomerSubMenu(!customerSubMenu);
  };

  const openIncome = () => {
    setIncomeSubMenu(!incomeSubMenu);
  }

  return (
    <>
      {/* Desktop and tablet nav links */}
      <div className="hidden md:flex items-center space-x-6">
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
        <button className="lg:hidden">
          <img src={MobileMenu} alt="Menu" />
        </button>
      </div>

      {/* Mobile NavBar */}
      <div className="flex mx-auto py-9 space-x-20 md:hidden">
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
        <section className="md:hidden absolute top-0 left-0 right-0 bg-soft-black">
          <div className="flex justify-between items-center p-6 border-b-2 border-black">
            <button>
              <img src={Logo} alt="Logo" />
            </button>

            <button onClick={closeMenuHandler}>
              <img src={Cancel} alt="Cancel" />
            </button>
          </div>

          <div className="px-6 font-semibold space-y-2 text-sonic-silver mt-6">
            <div id="menu-item" className="menu-item group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="group-hover:fill-white"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 22C3.34315 22 2 20.6569 2 19V11.3361C2 10.4857 2.36096 9.67518 2.99311 9.10625L9.9931 2.80625C11.134 1.77943 12.866 1.77943 14.0069 2.80625L21.0069 9.10625C21.639 9.67518 22 10.4857 22 11.3361V19C22 20.6569 20.6569 22 19 22H5ZM20 11.3361V19C20 19.5523 19.5523 20 19 20H16V15C16 13.3432 14.6569 12 13 12H11C9.34315 12 8 13.3432 8 15V20H5C4.44772 20 4 19.5523 4 19V11.3361C4 11.0526 4.12032 10.7825 4.33104 10.5928L11.331 4.29284C11.7113 3.95056 12.2887 3.95056 12.669 4.29284L19.669 10.5928C19.8797 10.7825 20 11.0526 20 11.3361ZM10 20V15C10 14.4478 10.4477 14 11 14H13C13.5523 14 14 14.4478 14 15V20H10Z"
                  fill="#6F767E"
                />
              </svg>

              <p className="group-hover:text-white">Home</p>
            </div>

            <aside>
              <div id="menu-item" className="menu-item group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.1597 7.1842L19.2326 3.21844C18.667 2.45219 17.7713 2 16.8189 2H7.18101C6.22864 2 5.33285 2.45219 4.76729 3.21844L1.84018 7.1842C1.04645 8.25957 1.05987 9.73033 1.87309 10.791L9.61913 20.8946C10.8199 22.4609 13.18 22.4609 14.3808 20.8946L22.1268 10.791C22.94 9.73033 22.9534 8.25957 22.1597 7.1842ZM3.72383 8L6.37644 4.40615C6.56496 4.15073 6.86355 4 7.18101 4H16.8189C17.1363 4 17.4349 4.15073 17.6235 4.40615L20.2761 8H3.72383ZM3.78676 10L11.2063 19.6777C11.6066 20.1998 12.3933 20.1998 12.7936 19.6777L20.2131 10H3.78676Z"
                    fill="#6F767E"
                  />
                </svg>

                <div className="flex w-5/6 justify-between items-center">
                  <p className="group-hover:text-white">Products</p>
                  <div className="flex space-x-3 items-center">
                    {/* Add product button */}
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1517_30210)">
                          <path
                            className="group-hover:stroke-white"
                            d="M12 8V16"
                            stroke="#6F767E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            className="group-hover:stroke-white"
                            d="M8 12L16 12"
                            stroke="#6F767E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <rect
                            className="group-hover:stroke-white"
                            x="1"
                            y="1"
                            width="22"
                            height="22"
                            rx="11"
                            stroke="#33383F"
                            strokeWidth="2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1517_30210">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    {/* Add product button */}

                    {/* open product sub menu button */}
                    <button
                      className={
                        productSubMenu
                          ? "rotate-180 transition-all duration-75"
                          : "transition-all duration-75"
                      }
                      onClick={openProducts}
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
                    {/* open product sub menu button */}
                  </div>
                </div>
              </div>

              {productSubMenu && (
                <div className="flex flex-col w-4/6 ml-9">
                  <p className="menu-item hover:text-white">Drafts</p>
                  <p className="menu-item hover:text-white">Released</p>
                </div>
              )}
            </aside>

            <aside>
              <div id="menu-item" className="menu-item group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
                    fill="#6F767E"
                  />
                  <path
                    className="group-hover:fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33284 17.7154 5.44116 19.5488C7.19693 21.0756 9.49052 22 12 22C14.4162 22 16.6323 21.143 18.3609 19.7165C18.4276 19.6614 18.4936 19.6055 18.5588 19.5488ZM12.2579 19.9959C12.1723 19.9986 12.0863 20 12 20C11.9914 20 11.9827 20 11.9741 20C11.8937 19.9997 11.8135 19.9983 11.7337 19.9956C10.3914 19.9517 9.13273 19.5772 8.03655 18.9508C8.95181 17.7632 10.3882 17 12 17C13.6118 17 15.0482 17.7632 15.9634 18.9508C14.865 19.5785 13.6033 19.9533 12.2579 19.9959ZM17.5624 17.7498C16.2832 16.0781 14.2675 15 12 15C9.73249 15 7.7168 16.0781 6.43759 17.7498C4.93447 16.2953 4 14.2568 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2568 19.0655 16.2953 17.5624 17.7498Z"
                    fill="#6F767E"
                  />
                </svg>

                <div className="flex w-5/6 justify-between">
                  <p className="group-hover:text-white">Customers</p>

                  {/* open customers sub menu button */}
                  <button
                    className={
                      customerSubMenu
                        ? "rotate-180 transition-all duration-75"
                        : "transition-all duration-75"
                    }
                    onClick={openCustomer}
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
                  {/* open customers sub menu button */}
                </div>
              </div>

              {customerSubMenu && (
                <div className="flex flex-col w-4/6 ml-9">
                  <p className="menu-item hover:text-white">Customer list</p>
                </div>
              )}
            </aside>

            <aside>
              <div id="menu-item" className="menu-item group">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 8.08392C8.16919 8.22435 7.37341 8.53889 6.66658 9.01118C5.67989 9.67047 4.91085 10.6075 4.45673 11.7039C4.0026 12.8003 3.88378 14.0067 4.11529 15.1705C4.3468 16.3344 4.91825 17.4035 5.75736 18.2426C6.59648 19.0818 7.66558 19.6532 8.82946 19.8847C9.99335 20.1162 11.1997 19.9974 12.2961 19.5433C13.3925 19.0892 14.3295 18.3201 14.9888 17.3334C15.4611 16.6266 15.7757 15.8308 15.9161 15H10C9.73479 15 9.48043 14.8946 9.2929 14.7071C9.10536 14.5196 9 14.2652 9 14V8.08392ZM5.55544 7.34824C6.87104 6.46919 8.41775 6 10 6C10.5523 6 11 6.44772 11 7V13H17C17.5523 13 18 13.4477 18 14C18 15.5823 17.5308 17.129 16.6518 18.4446C15.7727 19.7602 14.5233 20.7855 13.0615 21.391C11.5997 21.9965 9.99113 22.155 8.43928 21.8463C6.88743 21.5376 5.46197 20.7757 4.34315 19.6569C3.22433 18.538 2.4624 17.1126 2.15372 15.5607C1.84504 14.0089 2.00347 12.4003 2.60897 10.9385C3.21447 9.47672 4.23985 8.22729 5.55544 7.34824Z"
                    fill="#6F767E"
                  />
                  <path
                    className="group-hover:fill-white"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2929 2.29289C13.4804 2.10536 13.7348 2 14 2C16.1217 2 18.1566 2.84285 19.6569 4.34314C21.1571 5.84344 22 7.87827 22 10C22 10.5523 21.5523 11 21 11L14 11C13.7348 11 13.4804 10.8946 13.2929 10.7071C13.1054 10.5196 13 10.2652 13 10V3C13 2.73478 13.1054 2.48043 13.2929 2.29289ZM15 4.08389V9L19.9161 9C19.7098 7.77969 19.1293 6.64405 18.2426 5.75736C17.3559 4.87067 16.2203 4.29016 15 4.08389Z"
                    fill="#6F767E"
                  />
                </svg>

                <div className="flex w-5/6 justify-between">
                  <p className="group-hover:text-white">Income</p>
                  {/* open income sub menu button */}
                  <button
                    className={
                      incomeSubMenu
                        ? "rotate-180 transition-all duration-75"
                        : "transition-all duration-75"
                    }
                    onClick={openIncome}
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
                  {/* open income sub menu button */}
                </div>
              </div>

              {incomeSubMenu && (
                <div className="flex flex-col w-4/6 ml-9">
                  <p className="menu-item hover:text-white">Payouts</p>
                  <p className="menu-item hover:text-white">Statements</p>
                </div>
              )}
              
            </aside>

          </div>

          <MobileProfileNav />
        </section>
      )}
    </>
  );
}
