import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Filter from "../../ui-components/general-ui/Filter";
import OverviewCard from "../../ui-components/products-ui/OverviewCard";

export default function Overview() {
  return (
    <section className="bg-soft-black p-6  rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle titleText="Overview" titleColor="bg-lavender-blue" />

        <Filter />
      </div>

      <div className="flex items-center space-x-3 overflow-x-auto">
        <OverviewCard />
        <OverviewCard />
        <OverviewCard />
      </div>

    </section>
  );
}
