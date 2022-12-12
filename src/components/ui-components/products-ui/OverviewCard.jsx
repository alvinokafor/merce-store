import Income from "/assets/icons/income.svg";
import Increase from "/assets/icons/increase.svg";
import EarningSqiggle from "/assets/icons/earning-squiggle.svg";

export default function OverviewCard() {
  return (
    <section className="w-[285px] md:w-[269px] lg:w-[316px]  bg-[#373F3C] rounded-xl ">
      <div className="m-8 flex items-center justify-between">
        <div>
          <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full">
            <img src={Income} alt="income" />
          </div>
          <div className="space-y-2 mt-4">
            <p className="text-sm font-semibold">Earning</p>
            <h2 className="text-5xl">128k</h2>
            <div className="flex rounded-md bg-soft-black p-1">
              <img src={Increase} alt="increase" />
              <p className="text-bud-green">
                37.8% <span className="text-white">this week</span>
              </p>
            </div>
          </div>
        </div>

        <img src={EarningSqiggle} alt="small chart" />
      </div>
    </section>
  );
}
