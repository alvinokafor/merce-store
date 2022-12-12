import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Basket from "/assets/icons/basket.svg";

export default function RefundRequest() {
  return (
    <section className="bg-soft-black p-6  rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle titleText="Refund requests" titleColor="bg-peach" />
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-2 items-center justify-center w-12 h-12 rounded-full bg-[#FFE7E4]">
          <img src={Basket} alt="refunds" />
        </div>
        <p className="w-4/5 md:w-3/4 text-sm md:text-base">
            You have <strong>52 open refund requests</strong> to action. This
            includes <strong>8 new requests.</strong> 👀
          </p>
      </div>

      <button className="hover:border-white hover:text-white transition-all duration-150 font-semibold text-sonic-silver text-center w-full py-3 border-2 border-sonic-silver rounded-xl mt-8">
          Review refund requests
        </button>

    </section>
  );
}
