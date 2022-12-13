import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Filter from "../../ui-components/general-ui/Filter";
import OverviewCard from "../../ui-components/products-ui/OverviewCard";
import EarningSqiggle from "/assets/icons/earning-squiggle.svg";
import CustomerSqiggle from "/assets/icons/customer-squiggle.svg";
import PaymentSqiggle from "/assets/icons/payment-squiggle.svg";
import Income from "/assets/icons/income.svg";
import PaymentCard from '/assets/icons/payment-card.svg'
import ShoppingBag from '/assets/icons/shopping-bag.svg'

export default function Overview() {
  return (
    <section className=" bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center mb-8">
        <SectionTitle titleText="Overview" titleColor="bg-lavender-blue" />

        <Filter />
      </div>

      <div className="card-overflow overflow-x-auto">
        <div className="mx-6 flex justify-between">
          <OverviewCard
            icon={Income}
            smallChart={EarningSqiggle}
            bgColor="bg-[#373F3C]"
            cardTitle="Earning"
            info="128k"
          />
          <OverviewCard 
            icon={ShoppingBag}
            smallChart={CustomerSqiggle}
            bgColor="bg-[#2F333F]"
            cardTitle="Customers"
            info="512"
          />
          <OverviewCard 
             icon={PaymentCard}
             smallChart={PaymentSqiggle}
             bgColor="bg-[#293135]"
             cardTitle="Payouts"
             info="64k"
          />
        </div>
      </div>
    </section>
  );
}
