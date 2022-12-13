import Increase from "/assets/icons/increase.svg";

export default function OverviewCard({icon, bgColor, cardTitle, info, smallChart}) {
  return (
    <section className={`min-w-[285px] first:ml-0 ml-3 md:w-[269px] lg:w-[316px] ${bgColor} rounded-xl`}>
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full">
            <img src={icon} alt="icon" />
          </div>
          <div className="space-y-2 mt-4">
            <p className="text-sm font-semibold">{cardTitle}</p>
            <h2 className="text-5xl">{info}</h2>
            <div className="flex rounded-md bg-soft-black p-1">
              <img src={Increase} alt="performance" />
              <p className="text-bud-green">
                37.8% <span className="text-white">this week</span>
              </p>
            </div>
          </div>
        </div>

        <img src={smallChart} alt="small chart" />
      </div>
    </section>
  );
}
