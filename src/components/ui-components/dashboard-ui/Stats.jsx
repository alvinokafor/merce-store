import Decrease from "/assets/icons/decrease.svg";
import Increase from "/assets/icons/increase.svg";

export default function Stats({setIncomeStat, setCustomerStat, customerStat, incomeStat}) {

  const customerStatHandler = () => {
    setCustomerStat(true);
    setIncomeStat(false);
  };

  const incomeStatHandler = () => {
    setIncomeStat(true);
    setCustomerStat(false);
  };

  return (
    <div className="bg-black p-2 rounded-2xl flex justify-between ">

      <div
        onClick={customerStatHandler}
        className={
          customerStat
            ? "flex w-2/4 p-5 items-start lg:items-center bg-gunmetal stats-bg rounded-xl cursor-pointer bg-opacity-100 transition-all duration-100"
            : "flex w-2/4 p-5 items-start lg:items-center rounded-xl cursor-pointer bg-opacity-0 transition-all duration-100"
        }
      >
        <div className="hidden md:flex bg-uranian-blue w-10 h-10 rounded-full md:items-center md:justify-center md:mr-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0001 2C9.79092 2 8.00006 3.79086 8.00006 6H6.64839C5.13542 6 3.85922 7.12661 3.67156 8.6279L2.42156 18.6279C2.19774 20.4185 3.5939 22 5.39839 22H18.6017C20.4062 22 21.8024 20.4185 21.5785 18.6279L20.3285 8.6279C20.1409 7.12661 18.8647 6 17.3517 6H16.0001C16.0001 3.79086 14.2092 2 12.0001 2ZM14.0001 8V9C14.0001 9.55228 14.4478 10 15.0001 10C15.5523 10 16.0001 9.55228 16.0001 9V8H17.3517C17.856 8 18.2814 8.37554 18.344 8.87597L19.594 18.876C19.6686 19.4728 19.2032 20 18.6017 20H5.39839C4.79689 20 4.33151 19.4728 4.40611 18.876L5.65611 8.87597C5.71867 8.37554 6.14407 8 6.64839 8H8.00006V9C8.00006 9.55228 8.44778 10 9.00006 10C9.55235 10 10.0001 9.55228 10.0001 9V8H14.0001ZM14.0001 6C14.0001 4.89543 13.1046 4 12.0001 4C10.8955 4 10.0001 4.89543 10.0001 6H14.0001Z"
              fill="#1A1D1F"
            />
          </svg>
        </div>

        <div className="md:space-y-1 lg:space-y-0 lg:flex lg:items-start lg:space-x-4">
            <div>
            <p className="text-sonic-silver text-sm font-semibold">Customers</p>
          <h2 className="font-semibold text-4xl md:text-5xl">1024</h2>
            </div>
          <div className={`lg:w-[80px] flex items-center stats-value ${!customerStat ? 'bg-gunmetal' : 'bg-[#322E32]'} p-1 rounded-lg justify-between`}>
            <img src={Decrease} alt="decrease" />
            <p className="text-soft-red ml-1">37.8%</p>
          </div>
        </div>
      </div>

      <div
         onClick={incomeStatHandler}
         className={
           incomeStat
             ? "flex w-2/4 p-5 items-start lg:items-center  bg-gunmetal stats-bg rounded-xl cursor-pointer bg-opacity-100 transition-all duration-100"
             : "flex w-2/4 p-5 items-start lg:items-center rounded-xl cursor-pointer bg-opacity-0 transition-all duration-100"
         }
      >
        <div className="hidden bg-lavender-blue w-10 h-10 rounded-full md:flex md:items-center md:justify-center md:mr-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.4889 5.05417C9.37598 4.5272 8.62402 4.52718 8.5111 5.05417L7.31658 10.6286C7.02017 12.0118 5.79778 13 4.38317 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H4.38317C4.85471 11 5.26217 10.6706 5.36097 10.2096L6.55549 4.63511C7.12011 2.00022 10.8799 2.0002 11.4445 4.63511L14.5111 18.9459C14.624 19.4729 15.376 19.4728 15.4889 18.9459L16.6834 13.3714C16.9798 11.9882 18.2022 11 19.6168 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19.6168C19.1453 13 18.7378 13.3294 18.639 13.7905L17.4445 19.3649C16.8799 21.9999 13.1201 21.9998 12.5555 19.3649L9.4889 5.05417Z"
              fill="#1A1D1F"
            />
          </svg>
        </div>

        <div className="md:space-y-1 lg:space-y-0 lg:flex lg:items-start lg:space-x-4">
            <div>
            <p className="text-sonic-silver text-sm font-semibold">Income</p>
          <h2 className="font-semibold text-4xl md:text-5xl">256k</h2>
            </div>
          <div className={`lg:w-[80px] flex items-center stats-value ${!incomeStat ? 'bg-gunmetal' : 'bg-[#2C3233]'} p-1 rounded-lg justify-between`}>
            <img src={Increase} alt="increase" />
            <p className="text-bud-green ml-1">37.8% </p>
          </div>
        </div>
      </div>
    </div>
  );
}
